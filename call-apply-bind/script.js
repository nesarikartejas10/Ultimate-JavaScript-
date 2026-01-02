//call()

function greet() {
  console.log(`Hi, ${this.name}!!`);
}

function updateInfo(value, lastName) {
  this.age += value;
  this.name += lastName;
  console.log(`${this.name} age is: ${this.age}`);
}

const user1 = {
  name: "Tejas",
  age: 30,
};

const user2 = {
  name: "Soham",
  age: 28,
};

greet.call(user1);
greet.call(user2);

//call
// updateInfo.call(user1, 5, "Nesarikar");
// updateInfo.call(user2, 4, "Patil");

//apply
// updateInfo.apply(user1, [5, "Nesarikar"]);
// updateInfo.apply(user2, [4, "Patil"]);

//bind
const user1UpdatedInfo = updateInfo.bind(user1, 5, "Nesarikar");
user1UpdatedInfo();

const user2UpdatedInfo = updateInfo.bind(user2, 4, "Patil");
user2UpdatedInfo();
