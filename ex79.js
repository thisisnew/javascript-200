const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(str, el => el * 2);
console.log(modifiedArr);