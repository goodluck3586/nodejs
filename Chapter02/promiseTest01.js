// // 비동기 함수의 경우 콜랙 안에 다음에 실행할 코드를 넣어야 한다.
// // 그렇게 콜백이 중첩되는(깊어지는) 경우 실행 순서를 파악하기 어려운 경우가 있다.

// // '콜백 헬' 극복방법: Promise
// // data 디렉토리에 있는 파일들의 목록을 가져온 후, 파일의 내용을 읽어와 'text'를 'content'로 수정하여 저장한다. 
// // 수정된 파일의 기록을 log.txt에 남기고, 모든 파일 수정이 끝나면 'all done'이라는 메시지와 'log.txt'의 내용을 터미널에 출력한다.
var fs = require('fs');

fs.access('./data/file1.txt', function(err){
    if(err){
        console.log(err.message);
    }else{
        fs.readFile('./data/file1.txt', function(err, data){
            if(err){
                console.log(err.message)
            }else{
                console.log(data.toString());
                var newText = data.toString().replace('hello', 'Hi');
                fs.writeFile('./data/file1.txt', newText, function(err){
                    if(err){
                        console.log(err)
                    }else{
                        fs.readFile('./data/file1.txt', function(err, data){
                            if(err){
                                console.log(err.message)
                            }else{
                                console.log(data.toString())
                            }
                        })
                    }
                })
            }   
        })
    }
})

var writeStream = fs.createWriteStream('./log.txt');  // 데이터를 file에 기록할 수 있는 writeStream
var counter = 0;

// fs.readdir('./data', function(err, files){
//     console.log(files);
//     files.forEach(function(fileName){
//         console.log('fileName : ', fileName);
//         fs.readFile(`./data/${fileName}`, 'utf8', function(err, data){
//             var newText = data.replace('text', 'content');  // 특정 텍스트를 다른 텍스트로 수정
//             fs.writeFile(`./data/${fileName}`, newText, function(err){
//                 if(err) throw err;
//                 writeStream.write(`changed ${fileName}\n`, function(err){
//                     if(err) throw err;
//                     counter++;
//                     if(counter >= files.length){
//                         console.log('all done');
//                         fs.readFile('./log.txt', function(err, data){
//                             console.log(data.toString());
//                         })
//                     }
//                 })
//             })
//         })
//     })
// })






















