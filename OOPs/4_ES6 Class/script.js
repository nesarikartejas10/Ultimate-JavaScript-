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

const tejasAccount = new BankAccount("Tejas N", 3000);
const johnAccount = new BankAccount("John D");

tejasAccount.withdraw(2000);
johnAccount.deposit(4000);

console.log(tejasAccount, johnAccount);
