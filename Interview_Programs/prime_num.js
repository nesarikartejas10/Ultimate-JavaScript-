function isPrime(num) {
  let count = 0;
  if (num < 2) return `${num} is not prime number`;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return `${num} is prime number`;
  } else {
    return `${num} is not prime number`;
  }
}

console.log(isPrime(117));

//or
// function isPrime(num) {
//     if (num < 2) return `${num} is not a prime number`;

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return `${num} is not a prime number`;
//       } else {
//         return `${num} is a prime number`;
//       }
//     }
//   }
//   console.log(isPrime(1));
