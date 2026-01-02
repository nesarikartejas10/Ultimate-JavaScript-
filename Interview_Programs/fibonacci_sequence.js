// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(3));
// console.log(fibonacci(5));
// console.log(fibonacci(7));

function fibonacci(term) {
  let f0 = 0;
  let f1 = 1;
  let arr = [];

  arr.push(f0, f1);

  for (let i = 2; i < term; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    arr.push(arr[i]);
  }

  return arr;
}

console.log(fibonacci(5));
