const languages = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

const fruits = ["Apple", "Banana", "Orange", "Mango", "Peach"];

for (let lang in languages) {
  console.log(lang);
  console.log(languages[lang]);
}

for (let index in fruits) {
  console.log(index);
  console.log(fruits[index]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

//get key in the form of array
const keys = Object.keys(languages);
console.log(keys);

for (let key of keys) {
  console.log(languages[key]);
}

//get value in the form of array
const values = Object.values(languages);
console.log(values);

for (let value of values) {
  console.log(value);
}
