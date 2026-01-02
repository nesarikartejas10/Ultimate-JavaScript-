let num = 123;

//First way
// let evenCount = 0;
// let oddCount = 0;

// let strArr = num.toString().split("");

// for (let digit of strArr) {
//   if (parseInt(digit) % 2 === 0) {
//     evenCount += 1;
//   } else {
//     oddCount += 1;
//   }
// }

// console.log(`even count: ${evenCount}, odd count: ${oddCount}`);

//second way

let count = 0;
if (num === 0) {
  count = 1;
} else {
  while (num > 0) {
    const digit = num % 10;
    count++;

    num = Math.floor(num / 10);
  }
}

console.log(count);
