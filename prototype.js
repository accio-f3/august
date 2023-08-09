// whenever you create an object, JS engine attaches your object with
// hidden properties and methods automatically.

// let arr = new Array();

// Array -> fn + {
// prototype -> hidden methods and properties of arrays
// }

//  Array is class that has prototype which stores
//  hidden methods and properties of all arrays;

let obj={
    a:10,
}

function abc(){
    console.log('abc');
}

let arr=[1,2,3];

// when ever we are making
// any class, all the methods
// and properties of that class
// is stored in an object
// that we can access by doing
// thatClass.prototype

// how instance of that class
// will access that properties?
// it will access by __proto__


// ParentClass.prototype === childInstance.__proto__
// TRUE

// arr.__proto__ === Array.prototype

// Array.prototype -> array

// (Array.prototype).__proto__ === Object.prototype;

// Array.prototype is instance of Object

// Object -> hidden methods of Array -> array


function abc(){
    
}

// parent of Function.prototype -> Object.prototype