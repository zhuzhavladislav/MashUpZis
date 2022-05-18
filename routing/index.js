const url = require('url');
const fs = require('fs');


const define = function(req, res, postData) {
  const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname.replaceAll("%20", " ");
    prePath = __dirname;
    //Отсеиваем все запросы по точке, так чтобы туда попали только запросы к
    // файлам, например: style.css, test.js, song.mp3
if(/\./.test(path)) {
  if(path == 'favicon.ico') {
    let readStream = fs.createReadStream(prePath+path);
    readStream.pipe(res);
    return;
  }
  else{
   if(/\.mp3$/gi.test(path)) {
      res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    }
    else if(/\.css$/gi.test(path)) {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      });
    }
    else if(/\.js$/gi.test(path)) {
      res.writeHead(200, {
        'Content-Type': 'application/javascript'
      });
    }
    let readStream = fs.createReadStream(prePath+path);
    readStream.pipe(res);
    return;
    }
  }
    try {
      let dynPath = './dynamic/' + path;
      let routeDestination = require(dynPath);
      routeDestination.promise(res,postData,req).then(
        result => {
          res.writeHead(200);
          res.end(result);
          return;
        },
        error => {
          let endMessage = {};
          endMessage.error = 1;
          endMessage.errorName = error;
          res.end(JSON.stringify(endMessage));
          return;
        }
      );
    }
    catch (err) {
     let filePath = prePath+'/static'+path+'/index.html';
      fs.readFile(filePath, 'utf-8', (err, html) => {
        // Если не находим файл, пытаемся загрузить нашу страницу 404
        if(err) {
          let nopath = 'routing/nopage/index.html';
          fs.readFile(nopath, (err , html) => {
            if(!err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              res.end(html);
            }
            else{
              let text = "Something went wrong. Please contact webmaster@forgetable.ru";
              res.writeHead(404, {'Content-Type': 'text/plain'});
              res.end(text);
            }
          });
        }
        else{
          // Нашли файл, отдали, страница загружается.
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(html);
        }
      });
    }
};
exports.define = define;