var http = require('http');
var qs = require('querystring');

// 드라마 목록
var dramaList = [
    {title: '나의 아저씨', actor: '아이유, 이선균'},
    {title: '미스터 션샤인', actor: '김태리, 이병헌'}
]

// 1. get 방식 처리
var url = require('url');
var server = http.createServer(function(req, res){
    console.log('req.url : ', req.url);

    // url 및 querystring 파싱
    var parsedUrl = url.parse(req.url);
    var query = qs.parse(parsedUrl.query);
    console.log('parsedUrl ', parsedUrl);
    console.log('querystring ', query);

    // 드라마 목록에 데이터 추가
    if(query.title && query.actor){
        dramaList.push({title: query.title, actor: query.actor});
        res.writeHead(302, {'Location': 'http://localhost:8080'});
        res.end();
    }else{
        showDramaList(res);  // 결과를 클라이언트로 전송
    }
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});


// // 2. post 방식으로 처리
// var server = http.createServer(function(req, res){
//     // body에서 데이터를 추출하여 저장
//     if(req.method.toLowerCase() === 'post'){
//         addDramaItem(req, res);
//     }else{
//         showDramaList(res);
//     }
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

// function addDramaItem(req, res){
//     var body = '';
//         req.on('data', function(chunk){
//             body += chunk;
//         });
//         req.on('end', function(){
//             var query = qs.parse(body);
//             if(query.title && query.actor){
//                 dramaList.push({title: query.title, actor: query.actor});
//             }
//             res.writeHead(302, {'Location': 'http://localhost:8080'});
//             res.end();
//         });
// }

// function showDramaList(res){
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.write(`<html><body><h1>My Favorite Drama</h1><ul>`);
//     // for(var i=0; i<dramaList.length; i++){
//     //     res.write(`<li>${dramaList[i].title}(${dramaList[i].actor})</li>`);
//     // }
//     dramaList.forEach(function(item){
//         res.write(`<li>${item.title}(${item.actor})</li>`);
//     });
//     res.write('</ul>');
//     res.write(`---------------------------------------------------
//     <h2>Add Drama</h2>
//     <form method="post" action="http://localhost:8080">
//         <p>제목 <input type="text" name="title"></p>
//         <p>배우 <input type="text" name="actor"></p>
//         <input type="submit">
//     </form>`)
//     res.end(`</body></html>`);
// }




