// what is JavaScript?
// it is single threaded
// it can execute 1 command at a time
// sync -> ???
// in a specific order
// call stack -> 
// it handles everything related to execution context
// everything -> creation/ deletion and code control

// GEC -> red box
// var b=10;
// function a(){ // blue box
//     console.log(b);
// }
// a();
// console.log(b);

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         // var b = 10;
//     }
// }
// console.log(b);
// a();

// 10
// undefined
// not defined

// scope of b was getting changed

// scope of any varible depends on lexical environment

// lexical environment

// lexical -> heirachy / order / sequence
// 
// lexical environment -> it is formed when
// any exection context is created
// var a=8;
// function x(){
//     // var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=10;
//     return y;
// }
// console.log(a);
// var z = x();
// console.log(a);
// z();
// when you return any function
// from a function, it returns function
// + lexical environment

// closures -> lexical environment + function
// closures -> function bind together with lexical environment
// lexical environment -> lexical env of it's parent exection context +  memory block of it's exection
// context
// 
