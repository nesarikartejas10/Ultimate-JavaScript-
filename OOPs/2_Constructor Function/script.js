function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdrawal = function (amount) {
    this.balance -= amount;
  };
}

// const JohnAccount = new BankAccount("John Doe", 1000);
// const steveAccount = new BankAccount("Steve Job");

// JohnAccount.deposit(3000);
// JohnAccount.withdrawal(500);
// steveAccount.deposit(500);
// steveAccount.withdrawal(100);

// console.log(JohnAccount, steveAccount);

// DOM Manipulation

const accounts = [];

//Create account
const accountForm = document.querySelector("#accountForm");
const accountName = document.querySelector("#accountName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(accountName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

//Deposit Amount
const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const depositAmount = document.querySelector("#depositAmount");

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  account.deposit(+depositAmount.value);
  console.log(accounts);
});

//Withdrawal Amount
const withdrawalForm = document.querySelector("#withdrawalForm");
const withdrawalAmount = document.querySelector("#withdrawalAmount");

withdrawalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  account.withdrawal(+withdrawalAmount.value);
  console.log(accounts);
});
