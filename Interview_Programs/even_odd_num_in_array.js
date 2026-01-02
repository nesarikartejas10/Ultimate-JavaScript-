let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNum = [];
let oddNum = [];

for (let num of nums) {
  if (num % 2 === 0) {
    evenNum.push(num);
  } else {
    oddNum.push(num);
  }
}

console.log(evenNum);
console.log(oddNum);
