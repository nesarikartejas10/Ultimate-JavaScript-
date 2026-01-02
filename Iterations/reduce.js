let nums = [1, 2, 3, 4, 5];

const result = nums.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0);

console.log(result);
