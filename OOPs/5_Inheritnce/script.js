class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
    this.transactionLimit = 10000;
  }

  takePersonalLoan(amount) {
    console.log(`${this.customerName} taking a personal loan of ${amount}`);
  }
}

const tejasAccount = new SavingAccount("Tejas N", 7000);

tejasAccount.takePersonalLoan(3000);

tejasAccount.deposit(3000);
tejasAccount.withdraw(2000);
console.log(tejasAccount);
