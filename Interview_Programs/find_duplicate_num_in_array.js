// function duplicateValue(arr) {
//   let sortedArr = arr.slice().sort();
//   let result = [];

//   for (let i = 0; i < sortedArr.length - 1; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       result.push(sortedArr[i]);
//     }
//   }
//   return result;
// }

// console.log(duplicateValue([2, 5, 3, 3, 8, 4, 7, 3, 3, 4]));

let arr = [2, 5, 3, 3, 8, 8, 8, 4, 7, 3, 3, 4];

const result = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);

console.log(result);
