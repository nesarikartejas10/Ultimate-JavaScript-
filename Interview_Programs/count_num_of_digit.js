let num = 123456;

// let count = num.toString().length;
// console.log(count);

//or
function countTotalDigits(num) {
  if (num === 0) return 1;
  else {
    let count = 0;
    while (num > 0) {
      let digit = num % 10;
      count = count + 1;

      num = Math.floor(num / 10);
    }

    return count;
  }
}

console.log(countTotalDigits(num));
