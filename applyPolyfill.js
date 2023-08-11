delete Function.prototype.apply;

Function.prototype.apply = function(obj,argsArray){
    // attached tempFunction 
    // (with fn as defi(this) given that -> fn.call) inside my obj;
    obj.tempFunction = this;
    const result = obj.tempFunction(...argsArray);
    delete obj.tempFunction;
    return result;
}
// original call was not saving
// call permanently

// let a={
//     tempFunction -> fn defi
// }

// consult result = a.tempFunction();

// let a={
// }

// return result

// ...args -> args = []
// argsArray ->



function sum(arg1, arg2) {
    console.log(this);
    return arg1 + arg2;
}

let obj = {
    a: 10,
    b: 200,
}

const sum1=sum(1,2);
console.log(sum1);

const sum2= sum.apply(obj,[1,2]);
const sum3= sum.call(obj,1,2);
console.log(sum2);
console.log(sum3);

console.log(obj);

