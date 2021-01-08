const arr = [1,2,3,4,5,6,7,8,9,10];

const fileteredTwo = arr.filter(el => {
    console.log(`현재 값은 ${el} 입니다.`);
    return el % 2 === 0;
});

console.log(fileteredTwo);

const filteredThree = arr.filter(el => el%3===0);
console.log(filteredThree);