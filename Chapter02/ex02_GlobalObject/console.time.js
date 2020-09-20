// 특정 코드가 실행되는 시간을 측정할 수 있다.

console.time('loop');
for(var i=0; i<1000000000; i++){
  continue;
}
console.timeEnd('loop');