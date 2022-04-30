from pymongo import MongoClient
from bson import regex as re
import gridfs
import os

def searchQuery(database, queryText=""):
    """Returns cursor with 30 tracks whose names contain queryText.

    Keyword arguments:
    database -- instance of database, mongo_client["db_name"]
    queryText -- text of user's query.
    lastId -- last _id value from previous query. This and previous ids won't be
              in cursor. Leave it empty if you don't need to skip documents.
    """
    return database.tracks.find({"track_name":re.Regex(".*" + str(queryText) + ".*", 'i')})

def getNewTrackId(database):
    """Returns maximum of _id field + 1 to set id for new track
    
    Keyword arguments:
    database -- instance of database
    """ 
    return database.tracks.find().sort("_id",-1).limit(1)[0]["_id"] + 1

def uploadTrack(client, database, track_name, track_description=None, track_photo_path=None, track_file_path=None):
    """Uploads track into MongoDB
    
    Keyword arguments:
    client -- instance of MongoClient
    database -- instance of database
    track_name -- name for the track
    track_description -- description of the track
    track_photo_path -- path of image file
    track_file_path -- path of audio file
    """ 
    with client.start_session() as session:
        with session.start_transaction():
            if not isinstance(track_name,str):
                raise ValueError("track_name must be string value")
            new_document = {
                "_id":getNewTrackId(database),
                "track_name":track_name
                }
            if track_description is not None:
                if isinstance(track_description, str):
                    new_document["track_description"] = track_description
                else:
                    raise ValueError("track_description must be string value")
            new_id = database.tracks.insert_one(new_document).inserted_id
            if track_photo_path is not None:
                extension = track_photo_path.split(".")[-1]
                if(extension != "jpg" and extension != "jpeg" and extension != "png" and extension != "bmp"):
                    raise ValueError("file extension must be jpg or jpeg or png or bmp")
                if isinstance(track_photo_path, str):
                    try:
                        file_data = open(track_photo_path, "rb")
                        data = file_data.read()
                        fs = gridfs.GridFS(database)
                        fs.put(data, filename = str(new_id) + "_img." + track_photo_path.split(".")[-1])
                        file_data.close()
                    except Exception as exc:
                        raise ValueError("Can't upload image " + str(exc))
                else:
                    raise ValueError("track_photo_path must be string value")
            if track_file_path is not None:
                extension = track_file_path.split(".")[-1]
                if(extension != "mp3" and extension != "wav" and extension != "ogg"):
                    raise ValueError("file extension must be mp3 or wav or ogg")
                if isinstance(track_file_path, str):
                    try:
                        file_data = open(track_file_path, "rb")
                        data = file_data.read()
                        fs = gridfs.GridFS(database)
                        fs.put(data, filename = str(new_id) + "_audio." + track_file_path.split(".")[-1])
                        file_data.close()
                    except Exception as exc:
                        raise ValueError("Can't upload audio file " + str(exc))
                else:
                    raise ValueError("track_file_path must be string value")

def downloadTrackImage(database, track_id, download_path, file_name=None):
    """Downloads image of track. Returns true if success.
    
    Keyword arguments:
    database -- instance of database
    track_id -- id of track in db
    download_path -- full path for directory to download image
    """
    if not isinstance(track_id, int) and not isinstance(track_id, float):
        raise ValueError("track_id must be Number value")
    if not isinstance(download_path, str):
        raise ValueError("download_path must be string value")
    fullpath = download_path.replace("\\", "/") if download_path.find("/") == -1 else download_path
    if fullpath[-1] != "/":
        fullpath += "/"
    fs = gridfs.GridFS(database)
    data = database.fs.files.find_one({"filename":re.Regex(str(float(track_id))+"_img.*")})
    if data is None:
        return False
    fullpath += data["filename"] if file_name is None else file_name 
    if os.path.exists(fullpath):
        raise ValueError("File with such name already exists")
    fs_id = data["_id"]
    outputdata = fs.get(fs_id).read()
    output = open(fullpath, "wb")
    output.write(outputdata)
    output.close()
    return True

def downloadTrackAudio(database, track_id, download_path, file_name = None):
    """Downloads audiofile. Returns true if success.
    
    Keyword arguments:
    database -- instance of database
    track_id -- id of track in db
    download_path -- full path for directory to download audio
    """
    if not isinstance(track_id, int) and not isinstance(track_id, float):
        raise ValueError("track_id must be Number value")
    if not isinstance(download_path, str):
        raise ValueError("download_path must be string value")
    fullpath = download_path.replace("\\", "/") if download_path.find("/") == -1 else download_path
    if fullpath[-1] != "/":
        fullpath += "/"
    fs = gridfs.GridFS(database)
    data = database.fs.files.find_one({"filename":re.Regex(str(float(track_id))+"_audio.*")})
    if data is None:
        return False
    fullpath += data["filename"] if file_name is None else file_name 
    if os.path.exists(fullpath):
        raise ValueError("File with such name already exists")
    fs_id = data["_id"]
    outputdata = fs.get(fs_id).read()
    output = open(fullpath, "wb")
    output.write(outputdata)
    output.close()
    return True

def deleteTrack(client, database, track_id):
    """Delete track from database
    
    Keyword arguments:
    client -- instance of MongoClient
    database -- instance of database
    track_id -- id of track in db
    """
    result = 0
    with client.start_session() as session:
        with session.start_transaction():
            result = database.tracks.delete_one({"_id":track_id}).acknowleged
            database.fs.files.delete_many({"filename":re.Regex(str(track_id) + ".*", 'i')})
    return result