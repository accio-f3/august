// Reduce -> arrays ->

// array of object -> 1 single object
// array of numbers -> 1 number
// array of something -> something

let arr = [1,2,3,4];

delete Array.prototype.reduce;

Array.prototype.reduce = function(callback,initialValue){
    let accumulator = initialValue;
    // accumulator -> number or undefined
    for(let i=0;i<this.length;i++){
        // if my accumulator is undefined return this[i];
        // else return user logic
        // return value goes inside accumulator
        if(accumulator===undefined){
            accumulator = this[i];
        }
        else{
            accumulator = callback(accumulator,this[i],i,this);
        }
    }
    return accumulator;
}

// // callback && initial
// case 1 with intialValue
let intialValue=0;

let sum = arr.reduce((acc,currentElement)=>{
    return acc+currentElement;
},intialValue);
console.log(sum);

let intialValue2=1;

let multi = arr.reduce((acc,currentElement)=>{
    return acc*currentElement;
},intialValue2);
console.log(multi);

// by default intialValue is not zero (important)
// here initial value will be 0th element of array and this can be anything
let sum2 = arr.reduce((acc,customElement)=>{
    return acc+customElement;
})
console.log(sum2);

// let sum = intialValue;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//     // sum at index(i) = sum at index(i-1) + currentElement;
//     // sum at index (i) = acc + currentElement
// }
// return sum;