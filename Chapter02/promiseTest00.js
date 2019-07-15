// 비동기 처리
// 1. 콜백 함수
function delay(sec, callback){
    setTimeout(() => {
        callback(new Date().toTimeString());
    }, sec * 1000);
}

console.log('start', new Date().toTimeString());
delay(1, function(date){
    console.log(date);
});
console.log('hello');

// 1-1 여러 콜백 함수를 차례로 실행
// delay(1, function(date){
//     console.log(1, date);
// });
// delay(1, function(date){
//     console.log(2, date);
// });
// delay(1, function(date){
//     console.log(3, date);
// });

delay(1, function(date){
    console.log(1, date);
    delay(1, function(date){
        console.log(2, date);
        delay(1, function(date){
            console.log(3, date);
        });
    });
});

delay(1, function(date){
    console.log(1, date);
    delay(1, function(date){
        
        delay(1, function(date){
            console.log(3, date);
        });
        console.log(2, date);
    });
});

// 2. Promise 사용
function delayP(sec){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(new Date().toTimeString());
        }, sec * 1000);
    });
}

console.log('start', new Date().toTimeString());
delayP(1)
    .then(function(result){
        console.log(1, result);
        return delayP(1);
    })
    .then(function(result){
        console.log(2, result);
        return delayP(1);
    })
    .then(function(result){
        console.log(3, result);
    })