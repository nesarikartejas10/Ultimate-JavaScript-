// "use strict";

//1. this in global scope

//in node js env => {}
//in browser => Window

// console.log(this);

//2. function => this point to who invoked that function
//in non strict mode this point to global object
//in strict mode this point to undefined
function greet() {
  console.log(this);
}
// greet();

//3.call(), apply() & bind() => this pointing to the invoking object
function greet() {
  console.log(`Hi, ${this.name}!!`);
}

const user1 = {
  name: "Tejas",
  age: 30,
};

const user2 = {
  name: "Soham",
  age: 28,
};

// greet.call(user1);
// greet.call(user2);

//4.Class => this pointing to newly created empty object
//in class when we create instance using new keyword, new creates an empty object and this pointing to that empty object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Tejas", 30);
// console.log(p1);

//5. Arrow function
//Arrow function does not have its own this, so it takes this from lexical environment scope
const greeting = () => {
  console.log(this);
};

// greeting();

// Arrow function usecase
// const stopwatch = {
//   second: 0,
//   start: function () {
//     setInterval(function () {
//       this.second++;
//       console.log(this);
//       console.log(this.second); //NaN =>because here function invoked by setInterval so that this pointing to the setInterval, to solve this issue we use arrow function
//     }, 1000);
//   },
// };

const stopwatch = {
  second: 0,
  start: function () {
    setInterval(() => {
      this.second++;
      console.log(this.second);
    }, 1000);
  },
};

// stopwatch.start();

//6 DOM
// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   console.log(this);
// });
