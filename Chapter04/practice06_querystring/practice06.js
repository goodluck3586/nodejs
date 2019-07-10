// // querystring으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var http = require('http');
var url = require('url');
var querystring = require('querystring');

// // 1. get 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
// var server = http.createServer(function(req, res){
//   const parsedURL = url.parse(req.url); // <1> url을 parsing하여 객체로 저장한다.
//   console.log('parsedURL.query : ', parsedURL.query);  // start=1&end=100
//   const query = querystring.parse(parsedURL.query); // <2> parsedURL을 parsing하여 querystring을 추출한 객체를 저장한다.
//   console.log('query : ', query);  // { start: '1', end: '100' }

//   // start와 end에 합계를 구할 범위의 숫자를 정수로 변환하여 저장한다.
//   let start = parseInt(query.start);
//   let end = parseInt(query.end); 
//   console.log(`start : ${start}, end : ${end}`);

//   // start와 end 변수가 비어있으면 404 에러 코드 전송
//   if( !start || !end){
//     res.statusCode = 400;  // 400 Bad Request
//     res.end('Wrong Parameter');
//   }else{
//     var sum = 0;
//     for(var i=start; i<=end; i++){
//       sum += i;
//     }
//     res.end(`<h1>${sum}</h1>`);  // <4> start부터 end까지의 합계를 <h1>태그로 감싸서 출력한다. 
//   }
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });

// ===================================================================================

// 2. post 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var server = http.createServer(function(req, res){
  if(req.method.toLowerCase() === 'post'){  // 메소드가 post 방식인가?
    var body = '';

    req.on('data', function(chunk){
      body += chunk;
    });

    req.on('end', function(){
      var data = querystring.parse(body);
      let start = parseInt(data.start);
      let end = parseInt(data.end); 
      console.log(`start : ${start}, end : ${end}`);

      if( !start || !end){
        res.statusCode = 400;  // 400 Bad Request
        res.end('Wrong Parameter');
      }else{
        var sum = 0;
        for(var i=start; i<=end; i++){
          sum += i;
        }
        res.end(`<h1>${sum}</h1>`);
      }
      res.writeHead(302, {'Location': '/'});
      res.end();
    });
  } 
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});

