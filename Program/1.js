//Write a program to remove duplicates from an array

// const removeDuplicate = (array) => {
//   let uniqueArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (uniqueArray.indexOf(array[i]) === -1) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray;
// };

const removeDuplicate = (array) => {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
};

console.log(removeDuplicate([1, 3, 2, 5, 1, 3]));
