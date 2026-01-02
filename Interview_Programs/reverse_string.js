let str = "hello";

//first way
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr = revStr + str[i];
// }

// console.log(revStr);

//second way
let revstr = str.split("").reverse().join("");
console.log(revstr);
