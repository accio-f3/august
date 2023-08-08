// Object is collection of properties
// property -> key - value pair
// property -> function -> method of that object

// const user = {
//     nam:'pc',
//     age:23,
// }

// console.log(user);

// user.age=null;
// console.log(user);

// delete user.age;

// console.log(user);

// const func=(function(a){
//     delete a;
//     return a;
// })(5);

// console.log(func);


// let arr=[1,2,3];
// delete arr[0];
// console.log(arr);

// key with spaces

// const user = {
//     nam: 'pc',
//     age: 23,
//     'work at walmart': true,
// }

// console.log(user["work at walmart"]);
// console.log(user["nam"]);

// // Dynamic keys

// let firstName='prikshit';
// let kia='some random stuff from db';

// const user={
//     [kia]: firstName,
//     // key: value,
//     // key name -> kia
// }

// // const user={
// //     'some random stuff from db': 'prikshit',
// // }
// console.log(user);

// const user = {
//     nam: 'pc',
//     age: 23,
//     isWorking: true,
// }
// // key can any name
// for(key in user){
//     console.log(key);
//     // this key will be in string
//     console.log(user[key]);
// }

// for(anyThing in user){
//     console.log(anyThing);
//     console.log(user[anyThing]);
// }

// obj[key] given that key is in string
// obj.key if key is not string
// let obj = {
//     a: 10,
// }

// // function abc(){
// //     console.log('test');
// // }
// // the key for local storage should be string,number,arrays,functions

// localStorage.setItem('obj',JSON.stringify(obj));

// // JSON.stringify -> obj to string form of obj;

// let obj2 = JSON.parse(localStorage.getItem('obj'));
// console.log(obj2);

// spread operator

// const user = { nam: 'pc', age: 21 };
// console.log(user);
// const admin = {
//     ...user,
//     isAdmin: false,
// }

// console.log(admin);

// let c = {
//     greetings: 'Hello!',
// }

// let d=c;

// c.greetings='Hey';

// console.log(d.greetings);

// let obj={
//     a:10,
// }

// let newObj = {
//     ...obj,
// }

// newObj.a=100;

// console.log(obj);
// console.log(newObj);

// let oldObj={
//     a:10,
//     nestedObj:{
//         b:100,
//     }
// }

// let newObj={
//     ...oldObj,
// }

// newObj.a=100;
// newObj.nestedObj.b=200;

// console.log(oldObj);
// console.log(newObj);

// let person = {nam:'pc'};

// const members=[person];

// person.nam=null;

// console.log(members);


// spread operator will do shallow copy in case 
// of nested object and deep copy in case of normal obj;

// we need a proper method for deep cloning

// let arr = [1,2,3]
// let arr1 = arr;
// arr1[0] = 5

// console.log(arr);
// console.log(arr1);

// obj -> string

// let oldObj={
//     a:10,
//     nestedObj:{
//         b:100,
//     }
// }
// // let stringObj = JSON.stringify(oldObj); ❌
// // console.log(stringObj);

// // let newObj=JSON.parse(JSON.stringify(oldObj));

// newObj.a=100;
// newObj.nestedObj.b=200;

// console.log(oldObj);
// console.log(newObj);

// structuredClone -> ❌
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone


// deepClone -> we need to make out function