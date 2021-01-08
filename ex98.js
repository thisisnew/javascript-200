const arr = [
    {name:'a', age:2},
    {name:'b', age:5},
    {name:'c', age:30},
    {name:'d', age:3},
    {name:'e', age:6},
];

const nameArr = arr.map(el => el.name);

const ageArr = arr.map(el => el.age * 2);
const ageArr2 = arr.map(el => {
    el.age = el.age * 2;
    return el.age;
});

console.log(nameArr);
console.log(ageArr);
console.log(ageArr2);