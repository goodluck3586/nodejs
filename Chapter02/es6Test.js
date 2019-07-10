// 1. var 변수 문제
// 1-1. 반복문이 끝난 후에도 변수 i가 살아있다. var 변수는 함수 스코프
for(var i=0; i<3; i++){
console.log(i);
}
console.log('after loop i is ', i);

// 1-2 변수를 나중에 선언하거나, 재선언해도 에러 발생 안 함.
b = 5;
var b = 6;
var b = 7;
console.log(b);


// 2. const, let 변수: 블록 스코프, 재선언과 재할당 모두 불가.
// 2-1. const 변수는 상수로 작동하여 값을 재할당 할 수 없다.
const c = 3;
// c = 1;  // error


// 3. 구조분해할당과 백틱(backtick)문자를 사용한 템플릿 리터럴 문자 출력
// 3-1. 구조분해할당
var a, b, rest;
[a, b] = [10, 20];
console.log(`a = ${a}, b = ${b}`);

[a, b, , ,e] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`a = ${a}, b = ${b}, e = ${e}`);

[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`a = ${a}, b = ${b}, rest = ${rest}`);

({b, a} = {a: 100, b:200});
console.log(`a = ${a}, b = ${b}`);





