# MashUpZis
Наш сайт создан для прослушивания и поиска мэшапов.

Мэшап — неоригинальное музыкальное произведение, состоящее, как правило, из двух исходных произведений, записанное в студийных условиях путём наложения любой партии одного исходного произведения на похожую партию другого.

Планируемый дизайн:

![alt text](https://s665sas.storage.yandex.net/rdisk/903cace20980a6f6cb19e6a030afc0c28bcd3a9fe6a0718de9d18cf007bd6bc8/623cb263/dqmvhTflMeTkkWNiL74kDo77mfzVFF_ZexZYBTm44_B-sUU7FRyptoRD2dKyShmTWeYAmXkI6dirogEpsYbgwA==?uid=1075015943&filename=cover.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1075015943&fsize=2891721&hid=318183dc682258da21ba90212a63b8b9&media_type=image&tknv=v2&etag=63edf7eeaeb4f7c727f595b0c0daf6f3&rtoken=tRZyiMt5EB5P&force_default=yes&ycrid=na-246a59d6d437b001bef65eeb9282beb8-downloader2f&ts=5dafaa8f71ec0&s=f2e2769c6892d4415d66f832ab2de24f58533ff55f10fe25720b78da8d7a87c2&pb=U2FsdGVkX1-H-Yd6DVot_0S6ERKD1KnDtIQvgv31S9NmDGudCESUPs2W2m6NzvK5xa3vVvD4541DoOBgC58TVgQ6XtEXxMAJAWcfrxmMhuk)


Для работы с MongoDB нужно сначала ее установить. Для этого загрузим распространяемый пакет с официального сайта https://www.mongodb.com/try/download/community. Нужно найти MongoDB Community Server, в Available Downloads выбрать актуальную версию, нужную ОС и тип установщика (для windows достаточно скачать в виде zip и разархивировать в нужной папке). На начало 2022 года актуальной является версия 5.0.8. После установки для того, чтобы база данных работала, нужно запустить mongod (в bin) в скачанной папке. Более подробная инструкция здесь: https://metanit.com/nosql/mongodb/1.2.php.

В папке dbmashup содержатся dump файлы базы данных. Для импорта базы данных нужно скачать MongoDB Database Tools по ссылке https://www.mongodb.com/try/download/tools (актуальная версия 100.5.2). После этого откройте консоль, перейдите в скачанную папку (для windows: cd "полный путь до папки\bin") и выполните команду 
mongorestore -d dbmashup "путь_до_папки_из_git_репозитория\dbmashup"

Теперь можно пользоваться python функциями из dbFunctions для работы с БД.

