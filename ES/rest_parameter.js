function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30)); // 60
console.log(sum(5)); // 5

// Rest in Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

//Rest in Object Destructuring
const user = { name: "Tejas", age: 25, city: "Pune", country: "India" };
const { name, ...others } = user;

console.log(name); // "Tejas"
console.log(others); // { age: 25, city: "Pune", country: "India" }
