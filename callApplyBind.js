// a function is not inside the object
// but still the value of this keyword is object that
// is diff from window

// let obj={
//     nam:'pc',
// }
// let obj2={
//     nam:'accio job',
// }

// function sayHello(test1,test2){
//     return 'hello ' + this.nam +" "+ test1 + " " + test2; /// this-> window
// }

// console.log(sayHello('shubham','qwert'));

// 'hello pc'


// 1. function that needs to binded
// 2. .call (instead of directly that function) call it with call
// 3. call takes -> arguments
// 4. arguments are obj

// console.log(sayHello.call(obj,'test1','test2'));

// console.log(sayHello.call(obj2,'asdf','dfghj'));


// fn();
// obj

// fn -> window object -> fn(arg1,arg2,arg3); (implicit)
// fn -> obj  object -> fn.call(obj,arg1,arg2,arg3); (explicit)



// var city='gurgaon';


// function.call(object,agrs);
// here args can be of any number;

// call overwrites window object with whatever object you pass.


// let obj3={
//     city: 'test',
//     intro(name,company,currentCity){
//         console.log(`Hi I am ${name}, work at ${company}, lives in ${currentCity} and birthplace is ${this.city}`);
//     }
// }

// // implicit binding -> obj.fn() -> .call
// // window -> obj3

// obj3.intro('pc','walmart','blr'); /// this -> window

// obj3.intro.call(obj,'pc123456','walmart456','blr'); //// this -> obj

// obj3.intro.call(obj2,'vijay','accio','noida');

// function intro(name,company,currentCity){
//     console.log(`Hi I am ${name}, work at ${company}, lives in ${currentCity} and birthplace is ${this.city}`);
// }
// let args1=['pc','walmart','blr'];
// intro(...args1); /// this -> window


// intro.apply(obj,args1); //// this -> obj

// let args2=['vijay','accio','noida'];
// intro.apply(obj2,args2);

// call -> X, give us a new method;
// ... -> X

// fn.call(obj,arg1,arg2,arg3);

// fn.apply(obj,agrs); given that args=[arg1,arg2,arg3];

// let obj = {
//     city: 'delhi',
// }

// let obj2={
//     city: 'kashmir',
// }

// function abc(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3);
//     console.log(this);
// }

// let arg1='test1';

// let arg2 = 10;

// let arg3=['vijay','accio','noida'];

// abc(arg1,arg2,arg3);

// abc.call(obj2,arg1,arg2,arg3);

// abc.apply(obj,[arg1,arg2,arg3]);


// call and apply -> main issue -> ?

// let obj = {
//     city: 'delhi',
// }

// let obj2={
//     city: 'kashmir',
// }

// function abc(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3);
//     console.log(this);
// }

// // abc.call(obj2,'test1','test2','test2');
// // abc.call(obj2,'12','123','1234');
// // abc.call(obj2,'sdf','dcv','zx');

// let newAbc = abc.bind(obj2);
// // this newAbc funtion being window
// // still points towards obj passed

// abc('window1','window2','window3');
// newAbc('arg1','obj2','obj3');

// // newFn = oldFn.bind(object);


// let obj = {
//     city: 'delhi',
// }

// let obj2={
//     city: 'kashmir',
// }

// function abc(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3);
//     console.log(this);
// }

// abc.call(obj2,'test1','test2','test2');
// abc.call(obj2,'12','123','1234');
// abc.call(obj2,'sdf','dcv','zx');

// let newAbc = abc.bind(obj2,'fixed1');
// // let newAbc2 = abc.bind(obj);
// // this newAbc funtion being window
// // still points towards obj passed

// abc('window1','window2','window3');
// newAbc('asdf','test1');
// newAbc('zxcvbn','test2');
// newAbc('qwert','test3');

// newFn(obj) -> oldFn (window)

// pass arguments in bind if you want
// to fix any argument

// call -> fn.call(obj,arg1,arg2,arg3);

// apply -> fn.apply(obj,[arg1,args2,arg3]);

// bind -> newFn = fn.bind(obj) , here newFn will work exactly the fn was working
// only diff is fn was pointing towards window, newFn is pointing towards obj;

// bind with args, newFn = fn.bind(obj,arg1), here newFn will work exactly same as fn
// this keyword changed as per line (175), but now arg1 is fixed in newFn.
