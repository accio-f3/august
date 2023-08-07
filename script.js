// // THIS keyword
// let obj={
//     a:10,
//     abc(){
//         // THIS keyword inside any function
//         // will refer to the obj with which it's binded
//         console.log(this);
//     }
// }

// obj.abc();

// function test(){
//     console.log(this);
// }

// function test2(){
//     console.log(this);
// }
// // explicit

// window.test();
// implicit binding
// it is applied when you invoke a functio in an object using (.) notation.
// this keyword in such cases will point towards the object using which the function
// has been called.

// anyObj.function();


// // this is global context -> window
// this.a=5; // this
// console.log(a);


// this keyword inside normal functions
// this.a = 5;
// function getParam(){
//     console.log(this.a);
// }

// getParam();

// this.a = 5; // window.a=5
// const getParam = () => {
//     console.log(this);
//     // if it prints 5
// }

// getParam();

// let user ={
//     nam: 'PC',
//     age: 23,
//     getDetails(){
//         console.log(this.nam);
//     }
// }


// user.getDetails();

// let user ={
//     nam: 'PC',
//     age: 23,
//     childObj:{
//         newName: 'Prikshit',
//         getDetails(){
//             console.log(this.newName," and ", this.nam);
//         }
//     }
// }

// user.childObj.getDetails();

// let user = {
//     nam: 'PC',
//     age: 23,
//     childObj: {
//         newName: 'Prikshit',
//         getDetails: () => {
//             console.log(this);
//         }
//     }
// }

// user.childObj.getDetails();

// Normal function -> Object
// Arrow function -> Parent Normal Funtion

let user = {
    nam: 'PC',
    age:'23',
    getDetails(){
        // this?
        const nestedArrow=()=>console.log(this);
        // this keyword of getDetails is 
        // same as this keyword of nested Arrow
        nestedArrow();
    }
}
user.getDetails();