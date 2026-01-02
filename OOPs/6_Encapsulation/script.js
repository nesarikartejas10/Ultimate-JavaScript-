class BankAccount {
  //private property
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.#balance = balance;
    this.accountNumber = Date.now();
  }

  //private Method
  #calculateInterest(amount) {
    console.log("calculating interest");
  }

  takeBusinessLoan(amount) {
    this.#calculateInterest(amount);
    console.log(`${this.customerName} take business loan of Rs. ${amount}`);
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Please enter valid amount");
    } else {
      this.#balance = amount;
    }
  }

  get balance() {
    return this.#balance;
  }
}

const johnAccount = new BankAccount("John D", 3000);

johnAccount.balance = 8000; //Here we set balance
console.log(johnAccount.balance); //here we get balance

johnAccount.takeBusinessLoan(5000);
