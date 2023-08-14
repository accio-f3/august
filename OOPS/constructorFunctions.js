function CreateCustomer(nam, branch, accountBalace){
    this.nam=nam;
    this.branch=branch;
    this.accountBalace=accountBalace;
    // this.addMoney = function(amount){
    //     this.accountBalace+=amount;
    // }
}

CreateCustomer.prototype.addMoney = function (amount) {
    this.accountBalace += amount;
}

// // adding addMoney in my Function prototype
// createCustomer.__proto__.addMoney = function (amount) {
//     this.accountBalace+=amount;
// }

// customer1 is instance of createCustomer or Function

// customer1.__proto__.addMoney = function(amount){
//     this.accountBalace+=amount;
// }

const customer1 = new CreateCustomer('pc','hdfc',200);
// adding addMoney to my createCustomer prototype
// customer1.__proto__.addMoney = function(amount){
//     this.accountBalace+=amount;
// }

const customer2 = new CreateCustomer('abhishek','axis',2000);

console.log(customer1);
customer1.addMoney(500);
console.log(customer1);
// console.log(customer1);
// console.log(customer1);
// console.log(customer2);


// this is what I wanted
// Object -> Customer (parent) -> customer(instance)


// const customer2={};
// console.log(customer2);

// although this not required (just an observation)
// createCustomer -> f + obj
// obj -> {prototype: { constructorFn -> createCustomer}}

// // normal
// function abc(){
//     // perform Something
// }

// // cosntructor Fn
// function CreateSomething(){
//     // creates something
// }

// abc();

// abc.call({});

// const something = new CreateSomething();

