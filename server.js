const http = require('http');
const routing = require('./routing');

let server = new http.Server(function(req, res) {
  var jsonString = '';
  res.setHeader('Content-Type', 'application/json');
  req.on('data', (data) => { 
      jsonString += data;
  });

  req.on('end', () => {
      routing.define(req, res, jsonString); 
  });
});
server.listen(3000, 'localhost', function(){
  console.log('Сервер запущен на порту 3000');
});