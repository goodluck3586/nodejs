var fs = require('fs');

// // 1. 동기식 파일 읽기
// try {
//   var data = fs.readFileSync('./readme.txt');
//   console.log('동기식 파일 읽기');
//   console.log(data.toString());
// } catch (error) {  
//   console.log('fs.readFileSync Error', error);
// }

// // 2. 비동기식 파일 읽기
// fs.readFile('./readme.txt', function(err, data){
//   if(err){
//     console.log('fs.readFile Error');
//   }else{
//     console.log('비동기식 파일 읽기');
//     console.log(data.toString());
//   }
// });

// // 3. 동기식 파일 쓰기
// fs.writeFileSync('./write.txt', 'fs.writeFileSync()로 작성된 메시지');
// var data = fs.readFileSync('./write.txt', 'utf8');
// console.log(data);

// // 4. 비동기식 파일 쓰기
// fs.writeFile('./write.txt', 'fs.writeFile()로 작성된 메시지', function(err){
//   if(err){
//     console.log(err);
//     return;
//   }
    
//   fs.readFile('./write.txt', 'utf8', function(err, data){
//     console.log(data);
//   });
// });

// // 5. 파일에 내용 추가하기
// fs.appendFile('./write.txt', '\nGSM', (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     fs.readFile('./write.txt', 'utf8', (err, data)=>console.log(data));
//   }
// });

// // 6. 파일 존재 여부 확인
// // Check if the file exists in the current directory.
// var file = './write.txt';
// fs.access(file, fs.constants.F_OK, (err) => {
//   console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
// });

// // Check if the file is readable.
// fs.access(file, fs.constants.R_OK, (err) => {
//   console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
// });

// // Check if the file is writable.
// fs.access(file, fs.constants.W_OK, (err) => {
//   console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
// });

// // Check if the file exists in the current directory, and if it is writable.
// fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
//   if (err) {
//     console.error(
//       `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
//   } else {
//     console.log(`${file} exists, and it is writable`);
//   }
// });

// 7. 디렉토리 생성하기
fs.mkdir('./testDir', function(err){

});

// 8. 디렉토리 읽기
fs.readdir('./', function(err, files){
  console.log(files);
});

