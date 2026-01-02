//object
const languages = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (let key in languages) {
  console.log(key, ": ", languages[key]);
}

//Or
let langKeys = Object.keys(languages); //get object keys in the form of array

for (const key of langKeys) {
  console.log(languages[key]);
}

const langValues = Object.values(languages); //get object values in the form of array
console.log(langValues);

const langEntries = Object.entries(languages); //return array of key and values in the form of array
console.log(langEntries);
