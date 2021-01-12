let count = 0;

const timer = setInterval(() => {
    console.log(`${count++} 번째 함수 실행`);
    if(count === 10){
        clearInterval(timer);
    }
},1000);
