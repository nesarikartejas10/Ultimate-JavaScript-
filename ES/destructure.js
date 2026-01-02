// Array Destructuring
const numbers = [10, 20, 30];

// Old way
const a = numbers[0];
const b = numbers[1];

// With destructuring
const [x, y, z] = numbers;

console.log(x, y, z); // 10 20 30

// Object Destructuring
const user = { name: "Tejas", age: 25, city: "Pune" };

// Old way
const name1 = user.name;
const age1 = user.age;

// With destructuring
const { name, age } = user;

console.log(name, age); // Tejas 25

// Nested Destructuring
const person = {
  name: "Tejas",
  address: {
    city: "Pune",
    pin: 411001,
  },
};

const {
  address: { city, pin },
} = person;

console.log(city, pin); // Pune 411001
