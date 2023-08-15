class BankAccount {
    // # signifies accountBalance is private
    #accountBalance;
    constructor(customer, bank, accountBalance) {
        this.customer = customer;
        this.bank = bank;
        this.#accountBalance = accountBalance;
    }
    // // this is sort of setter with no proper secuirity
    // addMoney(amount) {
    //     this.#accountBalance += amount;
    // }
    addMoney(amount, bankEmployeePin) {
        // he will check if notes are original or note
        // if fake -> he will not deposit
        if (bankEmployeePin === '6270') {
            // more logic
            this.#accountBalance += amount;
            // if line 18 is doubtful
            // internal auditing happens
        }
        else {
            console.log('notes are fake');
        }
    }
    set name(name){
        this.customer=name;
    }
    // set something accepts only 1 args
    // set something cannot be used for setting private
    // properties, because it takes only 1 arg.
    // set accountBalance(amount) {
    //     this.#accountBalance += amount;
    // }
    // getter function
    // a public function exposing private property
    // getBalance(){
    //     return this.#accountBalance;
    // }
    // get keyword and accountBalance
    // this is writting getterFunction
    get accountBalance() {
        return this.#accountBalance;
    }
}

const bankAccount1 = new BankAccount('pc', 'hdfc', 10000);

// bankAccount1.#accountBalance=1000000000;
bankAccount1.addMoney(1000, '6270');

// bankAccount1.accountBalance = 1000000000;
// bankAccount1.addMoney(1000000000,'1234');

console.log(bankAccount1.accountBalance); // checking balance in your bank app
// console.log(bankAccount1.getBalance()); // writing upi pin to check your balance

// console.log(bankAccount1.getBalance());


//  #accountBalance; is my actuall property
//  and get accountBalance is working in such a way that 
// accountBalance apprears to be property of object

bankAccount1.name='prikshit';
console.log(bankAccount1);
