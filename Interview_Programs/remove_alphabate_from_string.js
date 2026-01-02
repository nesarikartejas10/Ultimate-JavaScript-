const str = "c123ode";

// let result = "";

// for (let char of str) {
//   if (/[1-9]/.test(char)) {
//     result += char;
//   }
// }

// console.log(result);

let newStr = "";

for (let char of str) {
  if (!isNaN(char)) {
    newStr += char;
  }
}

console.log(newStr);
