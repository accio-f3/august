// a function is not inside the object
// but still the value of this keyword is object that
// is diff from window

let obj={
    nam:'pc',
}
let obj2={
    nam:'accio job',
}

function sayHello(test1,test2){
    return 'hello ' + this.nam +" "+ test1 + " " + test2; /// this-> window
}

console.log(sayHello('shubham','qwert'));

// 'hello pc'


// 1. function that needs to binded
// 2. .call (instead of directly that function) call it with call
// 3. call takes -> arguments
// 4. arguments are obj

console.log(sayHello.call(obj,'test1','test2'));

console.log(sayHello.call(obj2,'asdf','dfghj'));