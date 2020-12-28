<<<<<<< HEAD
//#region 1. 비동기 함수의 동작
// console.log('start: ', new Date().toTimeString());
// setTimeout(() => {
//     console.log(`비동기1 작업 성공 : ${new Date().toTimeString()}`);
// }, 1000);

// setTimeout(() => {
//     console.log(`비동기2 작업 성공 : ${new Date().toTimeString()}`);
// }, 1000);

// setTimeout(() => {
//     console.log(`비동기3 작업 성공 : ${new Date().toTimeString()}`);
// }, 1000);
// console.log('다른 작업 들....');
//#endregion

//#region 2. 콜백 함수 사용
// console.log('start: ', new Date().toTimeString());
// setTimeout(() => {
//     console.log(`비동기1 작업 성공 : ${new Date().toTimeString()}`);
//     setTimeout(() => {
//         console.log(`비동기2 작업 성공 : ${new Date().toTimeString()}`);
//         setTimeout(() => {
//             console.log(`비동기3 작업 성공 : ${new Date().toTimeString()}`);
//         }, 1000);
//     }, 1000);
// }, 1000);
// console.log('다른 작업 들....');
//#endregion

//#region 3. Promise 기본 구조 => 비동기를 처리할 수 있도록 도와주는 오브젝트
// // 1. Producer
// const condition = true;
// const promise = new Promise((resolve, reject)=>{
//     console.log('promise는 만들어지는 순간 자동으로 실행된다.')
//     if(condition){
//         resolve('성공');
//     }else{
//         reject('실패');
//     }
// })

// // 2. Consumer : then, catch finally
// promise
//     .then((success)=>{           // resolve(msg) -> then((msg)
//         console.log(success)
//     })
//     .catch((fail)=>{             // reject(err) -> catch((err)
//         console.error(fail);
//     })
//#endregion

//#region 4. Promise 비동기1 -> 비동기2 -> 비동기3
// // 1. Producer
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => resolve(`비동기1 작업 성공 : ${new Date().toTimeString()}`), 1000);
// })

// // 2. Consumer : then, catch finally
// console.log('start: ', new Date().toTimeString());
// promise
//     .then((result)=>{
//         console.log(result);
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => reject(`비동기2 작업 성공 : ${new Date().toTimeString()}`), 1000);
//         });
//     })
//     .then((result)=>{
//         console.log(result);
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => resolve(`비동기3 작업 성공 : ${new Date().toTimeString()}`), 1000);
//         });
//     })
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// console.log('다른 작업 들....');
//#endregion

//#region 5. Promise 예제 => 암닭 -> 계란 -> 후라이
// // 1. Producer
// const getHen = () => 
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve('암닭'), 1000);
//     })

// const getEgg = (hen) => 
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve(`${hen} -> 계란`), 1000);
//         // setTimeout(() => reject(new Error(`error!!! ${hen} -> 계란`)), 1000);
//     })

// const cook = (egg) => 
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve(`${egg} -> 후라이`), 1000);
//     })

// // 2. Consumer: then, catch finally
// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))
//     .catch(err => console.log(err))

// // 3. 축약 표현
// console.log('Promise Consumer 축약 표현')
// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log)
//     .catch(console.log)
//#endregion

//#region 6. async 기본
// function getUserName(userId){
//     resolve('user name')
// }

// getUserName('id01')
//     .then((userName)=>console.log(userName))

// // async 키워드를 사용하면 Promise를 반환한다.
// async function getUserId(userName){
//     return 'userId'
// }

// getUserId('userName')
//     .then((userId)=>console.log(userId))
//#endregion

//#region 7. await 기본
function dealy(ms){
    return new Promise((resolve, reject) => setTimeout(resolve, ms));    // ms가 지나면 resolve를 호출하는 Promise 
}

async function getApple(){
    await dealy(2000);  // 비동기 함수 실행이 끝날때까지 기다려준다.
    return 'apple';
}

async function getBanana(){
    await dealy(2000);
    return 'banana';
}

// Promise Chaining을 이용한 사과와 바나나를 모두 가져오는 함수
function pickFruits01(){
    return getApple().then(apple => {
        return getBanana()
            .then(banana => `${apple} + ${banana}`);
    })
}

// async와 await를 이용한 사고와 바나나를 모두 가져오는 함수
async function pickFruits02(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

// Promise.all() 함수를 이용하여 비동기 함수를 병렬처리
async function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])   // 모든 비동기 함수 처리가 끝나면
    .then(fruits => fruits.join(' + '));            // 결과 배열이 전달된다.
}

// Promise.race() 함수를 이용하여 가장 먼저 값이 전달되는 것만 처리
async function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()])
}

pickFruits01().then(console.log);
pickFruits02().then(console.log);
pickAllFruits().then(console.log);
pickOnlyOne().then(console.log);
//#endregion

//#region 8. async, await => 암닭 -> 계란 -> 후라이
// // 1. Producer
// const getHen = () => 
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve('암닭'), 1000);
//     })

// const getEgg = (hen) => 
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve(`${hen} -> 계란`), 1000);
//         // setTimeout(() => reject(new Error(`error!!! ${hen} -> 계란`)), 1000);
//     })

// const cook = (egg) => 
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve(`${egg} -> 후라이`), 1000);
//     })

// // await은 async으로 선언된 함수 안에서 사용해야 한다.
// async function getFood(){
//     try {
//         const hen = await getHen();
//         console.log(hen)
//         const egg = await getEgg(hen);
//         console.log(egg)
//         const meal = await cook(egg);
//         console.log(meal);
//     } catch (error) {
//         console.log(error)
//     }
// }

// getFood();
//#endregion





























//#region Promise 예제 => Promise는 결과와 Promise 객체를 함께 return 한다.
// const fetchNumber = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(1)
//     }, 1000);
// })

// fetchNumber
//     .then(num => num * 2)
//     .then(num => num * 3)
//     .then(num =>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve(num-1)
//             }, 1000);
//         })
//     })
//     .then(num => console.log(num))
//#endregion 
=======
//#region 1. 콜백 함수 사용
function delay(sec, callback){
    setTimeout(() => {
        callback(new Date().toTimeString());
    }, sec * 1000);
}

console.log('start: ', new Date().toTimeString());
delay(1, (time)=>{
    console.log(1, time);
    delay(1, (time)=>{
        delay(1, (time)=>console.log(3, time));
        console.log(2, time);
    });
});
//#endregion

//#region 2. Promise 사용
function delay_promise(sec){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(new Date().toTimeString());
        }, sec * 1000);
    })
}

console.log('start ', new Date().toTimeString());
delay_promise(1)
    .then((time)=>{
        console.log(1, time);
        return delay_promise(1);
    })
    .then((time)=>{
        console.log(2, time);
        return delay_promise(1);
    })
    .then((time)=>console.log(3, time))
    .catch(()=>console.log('error'))
//#endregion
>>>>>>> origin/master
