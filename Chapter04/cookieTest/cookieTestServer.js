var http = require('http');

// // 1. cookie 만들기
// var server = http.createServer((req, res)=>{
//     // 세션 쿠키 만들기
//     // res.writeHead(200, {'Set-Cookie': 'myCookie=dongyun'});
//     // res.writeHead(200, {'Set-Cookie':['yummy_cookie=choco',
//     // 'tasty_cookie=strawberry']
//     // });

//     // 영속적인 쿠키 만들기
//     res.writeHead(200, {'Set-Cookie':['yummy_cookie=choco',
//     'tasty_cookie=strawberry',
//     `Permanent=cookies; Max-Age=${60*60*24*30}`]
//     });

//     res.end('<h2>Cookie Test</h2>');
// }).listen(8080, ()=>{
//     console.log('8080 포트에서 대기중');
// });

// 2. Cookie 읽고 처리하기
var fs = require('fs');
var cookie = require('cookie');
var url = require('url');
var qs = require('querystring');

var server = http.createServer(function(req, res){
    console.log(req.headers.cookie);

    // cookie 파싱
    var cookies = {}
    if(req.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
        console.log(cookies);
    }
    
    if(req.url.startsWith('/setCookie')){
        var parsedUrl = url.parse(req.url, true);
        var query = parsedUrl.query;
        res.writeHead(302, {'Set-Cookie':`name=${query.name}`, 'Location': '/'});
        res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>welcome ${cookies.name}</h1>` );
    }else{
        fs.readFile('./cookieTest.html', function(err, data){
            res.end(data);
        });
    }
    
}).listen(8080, function(){
    console.log('8080 포트에서 대기주ㅡㅇ');
});



