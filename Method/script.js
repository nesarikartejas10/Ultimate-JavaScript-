// const person = {
//   firstName: "Tejas",
//   age: 29,
//   about: function () {
//     console.log(`person name is ${this.firstName} & person age is ${this.age}`);
//   },
// };

// person.about();

function personInfo() {
  console.log(`person name is ${this.firstName} & person age is ${this.age}`);
}

const person1 = {
  firstName: "Tejas",
  age: 29,
  about: personInfo,
};

const person2 = {
  firstName: "Soham",
  age: 27,
  about: personInfo,
};

const person3 = {
  firstName: "Prachi",
  age: 32,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
