let num = 123456;
let sum = 0;
let strArr = num.toString().split("");
for (let digit of strArr) {
  sum += parseInt(digit);
}

console.log("sum of digits:", sum);
