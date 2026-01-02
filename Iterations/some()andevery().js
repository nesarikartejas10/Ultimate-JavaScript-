const nums = [2, 4, 6, 9, 8, 10];

const result = nums.some((num) => {
  return num % 2 === 1;
});

console.log(result);

const numbers = [1, 2, 3, 4, 5, 6];
const output = numbers.every(function (num) {
  return num % 2 === 0;
});
console.log(output);
