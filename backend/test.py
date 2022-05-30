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

# CheckSearch(database)
# deleteTrack(client, database, 5)
# deleteTrack(client, database, 5)

## пример загрузки
# try:
#     uploadTrack(client, database, "prekoil - эмалированная кукуруза", "audio/prekoil - эмалированная кукуруза.mp3", None, None)
# except Exception() as exc:
#     print(exc)

# deleteTrack(client, database, 10)

CheckSearch(database)
## Скачивание по id 
# for i in range(3):
#     print(downloadTrackImage(database, 4, "C:/Users/Nikolay/Desktop/"))
#     print(downloadTrackAudio(database, 4, "C:/Users/Nikolay/Desktop/"))

client.close()