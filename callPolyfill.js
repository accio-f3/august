delete Function.prototype.call;

Function.prototype.call = function(obj,...args){
    // attached tempFunction 
    // (with fn as defi(this) given that -> fn.call) inside my obj;
    obj.tempFunction = this;
    const result = obj.tempFunction(...args);
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

const sum2= sum.call(obj,1,2);
console.log(sum2);

console.log(obj);

