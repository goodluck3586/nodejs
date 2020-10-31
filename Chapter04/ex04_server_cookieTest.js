var http = require('http');

//#region 1. cookie 만들기
// var server = http.createServer((req, res)=>{
//     //#region 1-1. 세션 쿠키 만들기
//     // res.writeHead(200, {'Set-Cookie': 'myCookie=dongyun'});
//     res.writeHead(200, {'Set-Cookie':['yummy_cookie=choc o','tasty_cookie=strawberry']});
//     //#endregion

//     //#region 1-2. 영속적인 쿠키 만들기
//     // res.writeHead(200, {'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry', `Permanent=cookies; Max-Age=${60*60*24*30}`]
//     // });
//     //#endregion

//     res.end('Cookie Test');
// }).listen(8080, ()=>{
//     console.log('8080 포트에서 대기중');
// });
//#endregion

//#region 2. Cookie 읽고 처리하기
var fs = require('fs')
var cookie = require('cookie')
var url = require('url')

var server = http.createServer(function(req, res){
    console.log('req.headers.cookie: ', req.headers.cookie);    // request 헤더에 담긴 쿠키 문자열

    // cookie 파싱
    var cookies = {}
    if(req.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
        console.log('cookies: ',cookies);    // cookie 모듈에 의해 객체화된 쿠키 문자열
    }
    
    // 쿠키가 없으면 사용자 ex04_cookieTest.html 파을 전송하고,
    // 사용자가 이름을 전송하면 쿠키를 설정하여 `<h1>welcome ${cookies.name}</h1>` 문자열 전송
    if(req.url.startsWith('/setCookie')){
        var parsedUrl = url.parse(req.url, true);
        var query = parsedUrl.query;
        console.log(`parsedUrl.query: ${parsedUrl.query}`)
        res.writeHead(302, {'Set-Cookie':`name=${query.name}`, 'Location': '/'});
        res.end();
    }else if(cookies.name){    // cookies.name이 존재하면 true
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>welcome ${cookies.name}</h1>`);
    }else{
        fs.readFile('./ex04_cookieTest.html', function(err, data){
            res.end(data);
        });
    }
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});
//#endregion


