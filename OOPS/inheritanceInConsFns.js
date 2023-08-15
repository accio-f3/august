function CreateBankAccount(customerName, balance, branch) {
    this.customerName = customerName;
    this.balance = balance;
    this.branch = branch;
}
CreateBankAccount();
CreateBankAccount.prototype.addMoney = function (amount) {
    this.balance += amount;
}

CreateBankAccount.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    else {
        console.log('not sufficient');
    }
}

// Bank Accounts are of 2 type -> Savings and Current

function CreateCurrentBankAccount(customerName, balance, branch, cibil) {
    // CreateBankAccount(customerName,balance,branch); -> old
    //////////////////////////////////////////////////////////
    //this inside CreateBankAccount is pointing towards window
    //////////////////////////////////////////////////////////
    // what I want? this of CreateBankAccount which is pointing
    // towards window should start pointing towards THIS of CreateCurrentBankAccount;
    CreateBankAccount.call(this,customerName,balance,branch); // -> new
    this.dailyTransactionLimit=500000;
    this.cibil=cibil;
}

CreateCurrentBankAccount.prototype.businessLoan = function () {
    if(this.cibil>750){
        console.log(`you are offered ${0.2 * this.balance}`);
    }
    else {
        console.log('you are not elible for loan');
    }
}
// this is very very important for inheritance
CreateCurrentBankAccount.prototype.__proto__ = CreateBankAccount.prototype;

const bankAccount1 = new CreateBankAccount('bhumi',10000,'hdfc seelampur');
const bankAccount2 = new CreateCurrentBankAccount('Somesh',100000,'Axis peetampura',760);

console.log(bankAccount1);
console.log(bankAccount2);


// these 2 lines are most important
// for inherting methods
// CreateCurrentBankAccount.prototype.__proto__ = CreateBankAccount.prototype;
// for inherting properties
// CreateBankAccount.call(this,customerName,balance,branch); -> (constructor linking)
// (constructor linking) is the keyword that you need to remember