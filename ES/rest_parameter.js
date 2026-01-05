//without rest parameter
// function addNumber(a, b, c) {
//   console.log(a + b + c);
// }

// addNumber(1, 2); //NaN
// addNumber(1, 2, 3); //6
// addNumber(1, 2, 3, 4); //6
// addNumber(1, 2, 3, 4, 5); //6

//with Rest parameter
function addNumber(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  console.log(sum);
}

addNumber(1, 2); //3
addNumber(1, 2, 3); //6
addNumber(1, 2, 3, 4); //10
addNumber(1, 2, 3, 4, 5); //15

// Rest in Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second, ...nums] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(nums); // [3, 4, 5]

//Rest in Object Destructuring
const user = { name: "Tejas", age: 25, city: "Pune", country: "India" };
const { name, ...others } = user;

console.log(name); // "Tejas"
console.log(others); // { age: 25, city: "Pune", country: "India" }
