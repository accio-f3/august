function createCustomer(nam, branch, accountBalance) {
    const customer = {}; // this is instance of Object
    customer.nam = nam;
    customer.branch = branch;
    customer.accountBalance = accountBalance;
    customer.addMoney = function (amount) {
        customer.accountBalance += amount;
    }
    return customer;
}

const customer1 = createCustomer('abhishek','hdfc',5000);
const customer2 = createCustomer('Somesh','Kotak',15000);

console.log(customer1);
console.log(customer2);

// this example
// Object -> customer (instance)

// what I want????
// Object -> Customer (parent) -> customer(instance)

