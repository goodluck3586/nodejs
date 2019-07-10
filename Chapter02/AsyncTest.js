// 1초 뒤에 callback()함수 실행
function add(a, b, callback){
  setTimeout(() => {
    callback(a+b);
  }, 1000);
}

// add()함수가 비동기이기 때문에 가장 마지막에 실행된다.
console.log('before');
add(1, 2, function(result){
  console.log(result);
});
console.log('after');


