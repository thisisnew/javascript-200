const arr = [
    {id:0, name:'a', age:6},
    {id:1, name:'b', age:3},
    {id:2, name:'c', age:5},
    {id:3, name:'d', age:2},
];

const isAll = arr.every(el => el.name === 'a');
const isYoungerThenSeven = arr.every(el => el.age < 7);

console.log(isAll);
console.log(isYoungerThenSeven);
