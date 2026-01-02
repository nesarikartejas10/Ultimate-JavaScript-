// let str = "abbebrbbbhgjkshdj";

// let uniqueChar = "";
// for (let char of str) {
//   if (!uniqueChar.includes(char)) {
//     uniqueChar += char;
//   }
// }

// console.log(uniqueChar);

//or

function removeDuplicateChar(str) {
  const uniqueArray = [];
  const strArr = str.split("");
  for (char of strArr) {
    if (!uniqueArray.includes(char)) {
      uniqueArray.push(char);
    }
  }
  return uniqueArray.join("");
}

console.log(removeDuplicateChar("abbebrbbbhgjkshdj"));
