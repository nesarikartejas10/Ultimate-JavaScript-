const transactions = [100, -20, -30, 60, 120, -100, 80, 20];

//filter deposite amount in the form of array
const deposites = transactions.filter((ele) => {
  return ele > 0;
});

console.log(deposites);

//filter withdrawls amount in the form of array
const withdrawls = transactions.filter((ele) => {
  return ele < 0;
});

console.log(withdrawls);
