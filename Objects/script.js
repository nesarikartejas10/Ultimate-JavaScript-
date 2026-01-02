//Object Listeral
const user = {
  name: "Tejas",
  age: 30,
  "is admin": true,
};

console.log(user.name);
console.log(user.age);

// Add properties to object
user.isSeniorCitizen = false;
console.log(user);

//Object key with special character
console.log(user["is admin"]);

//Modifying Existing Property Value
user.age = 29;
console.log(user);

//Deleting a Key From Object
// delete user["is admin"];
// console.log(user);

//Accessing Dynamic Key Value
const someKey = "age";
console.log(user[someKey]); //29

//Create Object With Dynamic Values
// const car = prompt("Which is your favourite car?");

// const favCar = {
//   [car]: 5,
// };
// console.log(favCar);

// Constructor Function To Create Objects
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
console.log(bmwCar);
const audiCar = new Car("Audi", "A8");
console.log(audiCar);

// Using Object Constructor

const person = new Object();
person.name = "Alpha";
person.age = 76;
console.log(person);

// Using Factory Function
function createUser(name, age) {
  return {
    name,
    age,
  };
}

const user1 = createUser("Tejas", 30);
const user2 = createUser("Soham", 28);
console.log(user1);

//object methods
const profile = {
  name: "Tejas",
  company: "FlynautSas",
  message: function () {
    console.log(`${this.name} works at ${this.company} company`);
  },

  address: {
    city: "Pune",
    state: "Maharashtra",
    pin: 411004,
    greet: function () {
      console.log(`Welcome to ${this.city}`);
    },
  },
};

console.log(profile.name);
console.log(profile.company);
console.log(profile.message());

//Nested object properties and method
console.log(profile.address.state); //Maharashtra
profile.address.greet(); //Welcome to Pune

//in opertor (check object property exist or not)
console.log("salary" in profile); //false
console.log("company" in profile); //true

//for...in loop
for (let key in profile) {
  console.log(key);
  console.log(profile[key]);
}

//Object.keys() =>return all object keys in array
console.log(Object.keys(profile)); //['name', 'company', 'message', 'address']
