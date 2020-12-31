const double = x => x+x;
console.log(double(2));

const add = (a,b) => a+b;
console.log(add(1,2));

const printArgument = () => {
    console.log(arguments);
}

//printArgument(1,2,3);

const sum = (...args) => {
    let total = 0;
    for(let i=0; i<args.length; i++){
        total += args[i];
    }

    return total;
};

 console.log(sum(1,2,3,4,5));