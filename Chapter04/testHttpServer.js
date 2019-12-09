var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response){
    fs.readFile('./public/test.html', function(err, data){
        response.end(data)
    })
});

server.on('listening', function(){
  console.log('8080 포트에서 대기중');
});

server.listen(8080);