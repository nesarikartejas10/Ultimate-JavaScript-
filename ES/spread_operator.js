// Copy an Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // copy
console.log(arr2); // [1, 2, 3]

// Merge Arrays
const a = [1, 2];
const b = [3, 4];
const mergedArr = [...a, ...b];
console.log(mergedArr); // [1, 2, 3, 4]

// Pass as Function Arguments
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [10, 20, 30];
console.log(sum(...numbers)); // 60

// Copy an Object
const obj1 = { name: "Tejas", age: 25 };
const obj2 = { ...obj1 };
console.log(obj2); // { name: "Tejas", age: 25 }

// Merge Objects
const user = { name: "Tejas" };
const details = { age: 25, city: "Pune" };
const mergedObj = { ...user, ...details };
console.log(mergedObj); // { name: "Tejas", age: 25, city: "Pune" }
