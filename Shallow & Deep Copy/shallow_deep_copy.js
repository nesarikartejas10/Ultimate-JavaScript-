const obj1 = {
  name: "Tejas",
  details: {
    age: 29,
    designation: "Senior Developer",
  },
  greeting: () => {
    console.log(`Welcome ${this.name}`);
  },
};

//shallow copy
//1.Object.assign()
// const obj2 = Object.assign({}, obj1);
// obj2.details.designation = 'Tester';
//obj2.name = 'Soham';
// console.log(obj1);
// console.log(obj2);

//2.spread operator
// const obj2 = { ...obj1 };
// obj2.name = "Soham";
// obj2.details.designation = 'Tester';
// console.log(obj1);
// console.log(obj2);

//Deep Copy

// const copy = structuredClone(obj1);

// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.name = "Soham";
// obj2.details.designation = "Tester";
// console.log(obj1);
// console.log(obj2);

//loadash library for deep clone
// const obj2 = _.cloneDeep(obj1);
// obj2.name = "Soham";
// obj2.details.designation = "Tester";
// console.log(obj1);
// console.log(obj2);
