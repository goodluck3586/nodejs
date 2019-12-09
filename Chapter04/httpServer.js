var http = require('http');

// // 1. http server 구동 방식 1
// var server = http.createServer();

// server.on('request', function(request, response){
//   response.write('Wecome');
//   response.end(' to my server');
// });

// server.on('listening', function(){
//   console.log('8080 포트에서 대기중');
// });

// server.listen(8080);

// // 2. http server 구동방법 2
// var server = http.createServer(function(req, res){
//   res.write('Wecome');
//   res.end(' to my server2');
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });

// // 3. request, response 메시지 살펴보기
// var server = http.createServer(function(req, res){
//   console.log(req.headers);
//   console.log(req.method);
//   console.log(req.url);
  
//   res.statusCode = 200;
//   res.statusMessage = 'Okey';
//   res.setHeader('Content-Type', 'text/html');
//   res.writeHead(200, 'OKOK', {'Content-Type': 'text/plain'
// , 'myName': 'dongyun'});
//   res.end('<h1>Hello World</h1>');
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });

// 4. html 코드를 응답으로 보내기
var server = http.createServer(function(req, res){
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>안녕하세요. 이동윤 홈페이지 입니다.</h1>
    <img src="data:image/jpeg;base64,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" alt="">
  </body>
  </html>`);
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});

// // 5. 파일을 응답으로 보내기
// var fs = require('fs');
// var server = http.createServer(function(req, res){
//   fs.readFile('./index.html', function(err, data){
//     if(err){
//       console.log(err);
//       return;
//     }
//     res.end(data);
//   });
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });



