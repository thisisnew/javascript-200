const arr = [
    {id:0, name:'a', age:6},
    {id:1, name:'b', age:3},
    {id:2, name:'c', age:5},
    {id:3, name:'d', age:2},
];

const isChere = arr.some(el => el.name === 'c');

const olderThanSix = arr.some(el => el.age > 6);

console.log(isChere);
console.log(olderThanSix);