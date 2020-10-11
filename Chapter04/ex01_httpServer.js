var http = require('http');
fs = require('fs');

//#region 1. http server 구동 방식 1
var server = new http.Server();
var server = http.createServer();

server.on('request', function(request, response){
  response.write('Wecome to ');
  response.end('my server');
});

server.on('listening', function(){
  console.log('8080 포트에서 대기중');
});

server.listen(8080);
//#endregion

//#region 2. http server 구동방법 2
var server = http.createServer(function(req, res){
  res.write('Welcome to');
  res.end('my server');
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});
//#endregion

//#region 3. request, response 메시지 살펴보기
var server = http.createServer(function(req, res){
  // request 객체
  console.log('req.headers', req.headers);
  console.log('req.method', req.method);
  console.log('req.url', req.url);
  
  // response 객체
  res.statusCode = 200;
  res.statusMessage = 'Okey';
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, 'OKOK', {'Content-Type': 'text/html', 'myName': 'dongyun'});

  res.end('<h1>Hello World</h1>');
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});
//#endregion

//#region 4. html 파일 보내기 1
var server = http.createServer(function(req, res){
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>안녕하세요.<br>이동윤 홈페이지 입니다.</h1>
      <img src="https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1" alt="">
  </body>
  </html>`);
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});
//#endregion

//#region 5. html 파일 보내기 2
var server = http.createServer(function(req, res){
  fs.readFile('./index.html', function(err, data){
    if(err){
      console.log(err);
      return;
    }
    res.end(data);
  });
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});
//#endregion

//#region 6. routing 처리
var server = http.createServer((req, res)=>{
  console.log('req.url', req.url)
  if(req.url === '/'){
    fs.readFile('./index.html', (err, data)=>{
      res.end(data);
    })
  }else if(req.url === '/second'){
    res.write('<h1>Second page</h1>')
    res.end(`<h1><a href='/third'>third page</a></h1>`)
  }else if(req.url === '/third'){
    res.end('<h1>Third page</h1>')
  }
}).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion
