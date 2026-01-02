const str = "Hello";

// const obj = {};
// for (let char of str) {
//   if (obj[char]) {
//     obj[char] += 1;
//   } else {
//     obj[char] = 1;
//   }
// }

// console.log(obj);

const strArr = str.split("");
console.log(strArr);

const result = strArr.reduce((acc, char) => {
  if (char in acc) {
    acc[char] += 1;
  } else {
    acc[char] = 1;
  }
  return acc;
}, {});

console.log(result);
