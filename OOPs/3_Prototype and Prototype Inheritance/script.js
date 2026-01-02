function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const tejasAccount = new BankAccount("Tejas N", 3000);

console.log(tejasAccount);

tejasAccount.deposit(3000);

console.log(tejasAccount);

tejasAccount.withdraw(4000);

console.log(tejasAccount);
