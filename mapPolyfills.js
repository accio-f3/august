// // converted my browser to older version;
// delete Array.prototype.map;

// let arr=[1,2,3];


// // console.log(newArr);

// // // A callback is a function passed as an argument to another function
// Array.prototype.map = function(callback){
//     let newArr = [];
//     // oldArray->arr (in this case)
//     for(let i=0;i<this.length;i++){
//         newArr.push(callback(this[i],i,this));
//     }
//     return newArr;
// }

let arr=[1,2,3];
let newArr = arr.map((item) => item+100);
console.log(newArr);


// polyfills -> what is polyfill?
// why it is important?

// oldArr = [ele1,ele2,ele3] ->map-> newArr = [callback(ele1),callback(ele2),callback(ele3)];


// callBack(ele1) -> true
// newArr=[true,true,true];
// let newArr = arr.map(ele=>{
//     return ele * 2; // ele * 2 -> callBack(ele);
// })

// arr.map((ele,i,arr)=>{

// })

// let accioStudent=[];


// accioStudent.map


// arrayWritenFirst.map

// obj.anyMethod()

// let arr=[1,2,3];

// Array.prototype.test=function(){
//     console.log(this);
//     console.log(this.length);
//     console.log(this[1]);
// }

// arr.test();