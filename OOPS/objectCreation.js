const customer1 = {
    nam: 'Abhishek',
    accountBalance: 10000,
    bank: 'HDFC',
    addMoney: function(amount){
        this.accountBalance=this.accountBalance+amount;
    }
}

customer1.addMoney(5000);

console.log(customer1);

const customer2 = {
    nam: 'Gautam',
    accountBalance: 5000,
    bank: 'Axis',
    addMoney: function(amount){
        this.accountBalance=this.accountBalance+amount;
    }
}

customer2.addMoney(5000);
console.log(customer2);