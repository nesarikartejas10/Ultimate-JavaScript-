const myMap = new Map([
  ["name", "Tejas"],
  ["age", 30],
]);

console.log(myMap);

//add entries in Map
const userMap = new Map();
userMap.set("name", "Tejas");
userMap.set("age", 30);

console.log(userMap);

//get a value
console.log(userMap.get("name"));
console.log(userMap.get("age"));

//Map Keys
const funMap = new Map();
funMap.set(560, "My house number");
funMap.set(true, "Yes, I love music");

let obj = { name: "Soham" };
funMap.set(obj, "i am object");
console.log(funMap);

//Map properties and methods
// size property
console.log(funMap.size); //3

//has(key) => check entry is present or not
console.log(funMap.has(560)); //true
console.log(funMap.has("name")); //false

//delete(key) => delete single entry
funMap.delete(obj);
console.log(funMap);

//clear() => clear entir Map
funMap.clear();
console.log(funMap); //Map(0) {}

//MapIterator => keys() , values(), entries()
const ageMap = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["Bill", 10],
  ["Sam", 9],
]);

//To get all the keys
const allKeys = ageMap.keys();
allKeys.forEach((key) => {
  console.log(key);
});

//to get all values

const allValues = ageMap.values();
allValues.forEach((value) => {
  console.log(value);
});

// to all entres
const allEntries = ageMap.entries();
allEntries.forEach((entry) => {
  console.log(entry);
});

//directly iterate on Map using forEach
ageMap.forEach((value, key) => {
  console.log(`${key} is ${value} years old!`);
});

//directly iterate on Map using for-of
for (let [key, value] of ageMap) {
  console.log(`${key} is ${value} years old!`);
}

//Convert object into Map
const address = {
  name: "Tejas",
  age: 20,
  isMarried: false,
};

const addressMap = new Map(Object.entries(address));
console.log(addressMap);

//convert Map into object
const addObj = Object.fromEntries(addressMap);
console.log(addObj);

//convert Map into array
const drinksMap = new Map();
drinksMap.set("Milk", 200);
drinksMap.set("Tea", 100);
drinksMap.set("Coffee", 300);

//1-way
const drinksArr = Array.from(drinksMap);
console.log(drinksArr);

//or
const drinks = [...drinksArr];
console.log(drinks);
