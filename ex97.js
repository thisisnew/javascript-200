const arr = [
    {name:'a', age:2},
    {name:'b', age:5},
    {name:'c', age:30},
    {name:'d', age:3},
    {name:'e', age:6},
];

const myFriend = arr.find( el => el.age ===30 );

console.log(myFriend);
