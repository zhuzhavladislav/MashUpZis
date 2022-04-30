# MashUpZis
Наш сайт создан для прослушивания и поиска мэшапов.

Мэшап — неоригинальное музыкальное произведение, состоящее, как правило, из двух исходных произведений, записанное в студийных условиях путём наложения любой партии одного исходного произведения на похожую партию другого.

Планируемый дизайн:

![alt text](https://s665sas.storage.yandex.net/rdisk/2b6c9430daadae3d075889c360f77ea2be9a8bd1aa0917ea55d8dcb53c353762/626d5c67/dqmvhTflMeTkkWNiL74kDo77mfzVFF_ZexZYBTm44_B-sUU7FRyptoRD2dKyShmTWeYAmXkI6dirogEpsYbgwA==?uid=1075015943&filename=cover.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1075015943&fsize=2891721&hid=318183dc682258da21ba90212a63b8b9&media_type=image&tknv=v2&etag=63edf7eeaeb4f7c727f595b0c0daf6f3&rtoken=q2Imq5ac6ok0&force_default=yes&ycrid=na-44b4618c4bba3bc546d8d502dfa4b2f1-downloader24h&ts=5dde13732a7c0&s=139d3a6095ba9fb4c87bad1ebcb0b86bcf710285de932c24f95cb48ce926c007&pb=U2FsdGVkX18Kng2PZRSxXrqZL_gr5zu2Jiw_pkxl6DDazH9vFn9S8NxEE5pKE2iZT5r9LTSEn7xPdV2zXMxeNx7TII0NsfKVHgkh3OQdCxU)


Для работы с MongoDB нужно сначала ее установить. Для этого загрузим распространяемый пакет с официального сайта https://www.mongodb.com/try/download/community. Нужно найти MongoDB Community Server, в Available Downloads выбрать актуальную версию, нужную ОС и тип установщика (для windows достаточно скачать в виде zip и разархивировать в нужной папке). На начало 2022 года актуальной является версия 5.0.8. После установки для того, чтобы база данных работала, нужно запустить mongod (в bin) в скачанной папке. Более подробная инструкция здесь: https://metanit.com/nosql/mongodb/1.2.php.

В папке dbmashup содержатся dump файлы базы данных. Для импорта базы данных нужно скачать MongoDB Database Tools по ссылке https://www.mongodb.com/try/download/tools (актуальная версия 100.5.2). После этого откройте консоль, перейдите в скачанную папку (для windows: cd "полный путь до папки\bin") и выполните команду 
mongorestore -d dbmashup "путь_до_папки_из_git_репозитория\dbmashup"

Теперь можно пользоваться python функциями из dbFunctions для работы с БД.

