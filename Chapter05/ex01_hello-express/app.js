var express = require('express');
var app = express();                // app은 express의 인스턴스
const port = 3000

//#region 1. Hello world 예제
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })
//#endregion

//#region 2. 기본 라우팅
// // 라우팅은 URL과 HTTP요청메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 대한 응답
// // 각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우트가 일치할 때 실행된다.
// app.get('/', (req, res) => res.send('<h1>Get request</h1>'))
// app.post('/', (req, res) => res.send('<h1>Post request</h1>'))

// app.get('/book', (req, res) => res.send('<h1>Get a book</h1>'))
// app.post('/book', (req, res) => res.send('<h1>Add a book</h1>'))
// app.put('/book', (req, res) => res.send('<h1>Update a book</h1>'))
// app.delete('/book', (req, res) => res.send('<h1>Delete a book</h1>'))

// // app.route()를 이용한 라우트 체인 => 중복과 오타 감소
// app.route('/user')
//     .get((req, res) => res.send('<h1>Get a user</h1>'))
//     .post((req, res) => res.send('<h1>Add a user</h1>'))
//     .put((req, res) => res.send('<h1>Update a user</h1>'))
//     .delete((req, res) => res.send('<h1>Delete a user</h1>'))

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })
//#endregion

//#region 3. Express에서 정적 파일 제공
app.use(express.static('public'));  // 정적 파일 처리 미들웨어(정적 디렉토리 public 이름은 URL의 일부가 아니다.)

app.get('/zzz', function(req, res){
    console.log(`req.url: ${req.url}`);
    // res.redirect('./public/index.html')
    res.redirect('/index.html')
});

app.get('/hi', function(req, res){
    res.send('<h1>Hi Express</h1>');
});

app.get('/iu', function(req, res){
    res.sendFile('iu.png')
});

app.listen(8080, function(){
    console.log('8080 포트에서 대기중');
});
//#endregion


// // 3. 미들웨어(사용자 정의)
// // Express는 웹 서비스를 위한 기본적인 기능과 구조를 제공한다.
// // 미들웨어 함수는 다양한 기능을 제공하여 사용자가 선택하여 실행할 수 있다.

// function mw1(req, res, next){
//     console.log('middle ware 1');
//     req.myName = 'dongyun';
//     next();
// }
// function mw2(req, res, next){
//     console.log('middle ware 2');
//     next();
// }

// app.use(mw2);
// app.use(mw1);

// app.get('/', function(req, res){
//     res.send(`<h1>${req.myName}</h1>`);
// });

// // 4. 미들웨어 (써드파티 미들웨어: 로그남기기, 정적파일처리)
// var logger = require('morgan');

// app.use(logger('dev'));
// app.use(express.static('public'));

// app.get('/', function(req, res){
//     res.sendFile('./public/index.html');
// });

// // 5. querystring 처리(start ~ end까지의 합계)
// app.get('/', function(req, res){
//     if(req.query.start && req.query.end){
//         var start = parseInt(req.query.start);
//         var end = parseInt(req.query.end);
//         console.log(`start=${start}, end=${end}`);
//         res.send(`<h1>${calculateSum(start, end)}</h1>`);
//     }else{
//         res.sendfile('./public/sumRequest.html');
//     }
// });

// function calculateSum(start, end){
//     var sum = 0;
//     for(var i=start; i<=end; i++){
//         sum += i;
//     }
//     return sum;
// }

// // 6. post 처리(start ~ end까지의 합계)
// app.use(express.urlencoded({ extended: true }));

// app.post('/', function(req, res){
//     if(req.body.start && req.body.end){
//         var start = parseInt(req.body.start);
//         var end = parseInt(req.body.end);
//         console.log(`start=${start}, end=${end}`);
//         res.send(`<h1>${calculateSum(start, end)}</h1>`);
//     }else{
//         res.sendfile('./public/sumRequest.html');
//     }
// });





