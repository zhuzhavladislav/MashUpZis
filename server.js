const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(request, response, next){
  console.log(request.url);
  next();
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html'); 
});
app.get('/search', function(request, response){
  response.sendFile(__dirname + '/public/search.html');
})

app.listen(3000, function(){
  console.log('Сервер запущен на порту 3000');
});