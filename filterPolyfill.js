// delete Array.prototype.filter;

// let arr = [1,2,3,4,-1];

// Array.prototype.filter=function(callBack){
//     let newArray=[];
//     for(let i=0;i<this.length;i++){
//         if(callBack(this[i],i,this)){
//             newArray.push(this[i]);
//         }
//     }
//     return newArray;
// }

// let newArray=arr.filter((item)=>{
//     return item>2; // true
//     // else
// })

// console.log(newArray);

// [1,2,3,4,-1]

// callBack -> [F,T,T,T,F];

// condition -> if number fulfills this 
// condition, I will push this number



// let arr=[false,false,false];

// // snippet 1
// let newArray = arr.filter((item) => !item);
// number -> boolean

// !false -> true


// console.log(newArray);

// item -> if item is passing the condition


let arr=[false,false,false];

let newArray = arr.filter((item) => !item);

// map and filter mdn docs
// ES6 functions

// ()=>true;

// function(){
//     return true;
// }

// function abc(a){
//     return a*10;
// }


const abc = (a) => a * 10;

// {} braces and return keyword should be 
// used together
// else don't use both;