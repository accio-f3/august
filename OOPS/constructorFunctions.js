function createCustomer(nam, branch, accountBalace){

}

const customer1 = new createCustomer('pc','hdfc',200);

// console.log(customer1);
console.log(customer1.__proto__);


// this is what I wanted
// Object -> Customer (parent) -> customer(instance)


const customer2={};
// console.log(customer2);
