// these 2 lines are most important for constructor functions
// for inherting methods
// CreateCurrentBankAccount.prototype.__proto__ = CreateBankAccount.prototype;
// for inherting properties
// CreateBankAccount.call(this,customerName,balance,branch);

// CreateBankAccount.call(this -> super( -> super will pick args of parent Class coonstructor

// both super and extends work together skiping any of the word will give you error
// eventually

class BankAccount {
    constructor(nam, bank, accountBalance) {
        this.nam = nam;
        this.bank = bank;
        this.accountBalance = accountBalance;
    }
    addMoney(amount) {
        this.accountBalance += amount;
    }
}

class CurrentBankAccount extends BankAccount{
    constructor(nam, bank, accountBalance, cibil) {
        super(nam,bank,accountBalance);
        this.cibil = cibil;
    }
    businessLoan = function () {
        if (this.cibil > 750) {
            console.log(`you are offered ${0.2 * this.balance}`);
        }
        else {
            console.log('you are not elible for loan');
        }
    }
}

const currentBankAccount1 = new CurrentBankAccount('pc','hdfc','100',710);
console.log(currentBankAccount1);
currentBankAccount1.addMoney(1000);
console.log(currentBankAccount1);
