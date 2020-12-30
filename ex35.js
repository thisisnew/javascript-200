function checkNum(val){
    if(typeof val !=='number'){
        throw '유효하지 않은 값입니다.';
    }

    console.log('숫자 확인');
}

try {
    checkNum(100);
    checkNum("에러");    
} catch (error) {
    console.log(`에러발생! >>> ${error}`);
} finally {
    console.log('완료');
}

