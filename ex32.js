//객체 비구조화 할당
const obj = {a:1, b:2, c:30, d:44, e:5};
const {a,c} = obj;

console.log(`a --> ${a}`);
console.log(`c --> ${c}`);

const {a:newA = 10, f:newF=5} = obj;
console.log(`newA --> ${newA}`);
console.log(`newF --> ${newF}`);

//배열 비구조화 할당
const arr = [1,2,3,4,5,6];
const [q,w,...rest] = arr;

console.log(`q >>>> ${q}`);
console.log(`w >>>> ${w}`);

let [r=10, t=9] = [1];
console.log(`1 r >>>> ${r}`);
console.log(`1 t >>>> ${t}`);

[r,t] = [t,r];
console.log(`2 r >>>> ${r}`);
console.log(`2 t >>>> ${t}`);

function getArr(){
    return [11,12,13,14];
};

[r,,,t] = getArr();
console.log(`3 r >>>> ${r}`);
console.log(`3 t >>>> ${t}`);



