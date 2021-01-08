const arr = [1,[2,3], [4,5,6],['a','b','c','d']];

const newArr = arr.reduce((a,b) => {
    return a.concat(b);
},[]);

console.log(newArr);