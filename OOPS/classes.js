// in classes you don't need to write function keyword
class CreateCustomer{
    // randomMethod; // property (not method)
    constructor(nam,bank,accountBalance){
        this.nam=nam;
        this.bank=bank;
        this.accountBalance=accountBalance;
        // avoid writing function inside constructor
        // this.insideConstructor=function(){
        //     // console.log();
        // }
    }
    // outSideConstructor(){ // (method)
    //     // console.log();
    // }
    addMoney(amount){
        this.accountBalance+=amount;
    }
}

const customer1 = new CreateCustomer('pc','hdfc',200);
// create a new instance of CreateCustomer Class
console.log(customer1);

customer1.addMoney(500);
console.log(customer1);

// new -> {} this is instance of CreateCustomer
// constructor fn is called over this memory


// anything you are writing inside class
// which is not a method(function) this will go inside instance
// and if it's function it will go in prototype of that class