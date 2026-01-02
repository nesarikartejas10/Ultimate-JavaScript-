//Example 1
const fruits = ["Banana", "Apple", "Peach", "Mango", "Grapes"];

fruits.forEach(function (fruit, i, arr) {
  console.log(fruit, i, arr);
});

//Example 2
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.languageName} : ${item.languageFileName}`);
});
