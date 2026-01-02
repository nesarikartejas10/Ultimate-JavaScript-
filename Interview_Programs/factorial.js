// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));

//or

let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact = fact * i;
}

console.log(fact);
