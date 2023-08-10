// let obj1={
//     // nam:'pc',
//     // city: 'Blr',
//     // getDetails(){
//     //     console.log(`Hi I am ${this.nam} and from ${this.city}`);
//     // }
// }

// let obj2 = {
//     nam:'Prikshit',
//     city: 'delhi',
//     getDetails(){
//         console.log(`Hi I am ${this.nam} and from ${this.city}`);
//     }
// }

// // obj1.__proto__ = obj2;
// let obj={

// }

// obj.__proto__=obj2;
// obj1.getDetails();

// __proto__
// prototype

// prototype infinite loop
// Object.prototype.__proto__ = obj1.__proto__
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto



let obj = {
    a:10,
    b:20,
}

let obj1={
    a:12,
    d:function(){
        // let a=100;
        // here this -> a
        console.log(a);
        // closures ()
    }
}

obj.__proto__ = obj1;

obj.d();
