// Basic Example
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Tejas"); // Hello, Tejas!
greet(); // Hello, Guest!

// Multiple Default Parameters
function multiply(a = 1, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5  (b = 1)
console.log(multiply()); // 1  (a = 1, b = 1)
