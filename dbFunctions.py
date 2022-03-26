from pymongo import MongoClient
from bson import regex as re
import pprint
def searchQuery(queryText="", lastId=0):
    """Returns cursor with 30 tracks whose names contain queryText.

    Keyword arguments:
    queryText -- text of user's query.
    lastId -- last _id value from previous query. This and previous ids won't be
              in cursor. Leave it empty if you don't need to skip documents.
    """
    client = MongoClient()
    if lastId < 0:
        raise ValueError('lastId must be greater then or equal to 0')
    else:
        return client.dbmashup.tracks.find({"_id":{"$gt":lastId},"track_name":re.Regex(".*"+queryText+".*",'i')}).limit(30)

for cur in searchQuery("",2):
   pprint.pprint(cur)