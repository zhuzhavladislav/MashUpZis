#Здесь можно протестировать функции

from dbFunctions import *
import tkinter

def CheckSearch(database, query = ""):
    """Проверка вывода треков"""
    for cur in searchQuery(database, query):
        s=""
        for x in cur:
            s+=str(cur[x])+" "
        print(s)

client = MongoClient()
database = client["dbmashup"]

CheckSearch(database)

# deleteTrack(client, database, 4)
# deleteTrack(client, database, 5)

## пример загрузки
# try:
#     uploadTrack(client, database, "done - Rap God Rick", None, "someimage.jpg", "audio/done - Rap God Rick.mp3")
# except Exception() as exc:
#     print(exc)
# try:
#     uploadTrack(client, database, "heyoka vs cage - the elephant", "grimeatron mash up", None, "audio/heyoka vs cage - the elephant (grimeatron mash up).mp3")
# except Exception() as exc:
#     print(exc)

## Скачивание по id 
# print(downloadTrackImage(database, 4, "путь к папке для скачивания"))
# print(downloadTrackAudio(database, 4, "путь к папке для скачивания"))

client.close()