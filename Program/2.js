//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// const findEvenNumbers = (array) => {
//   return array.filter((element) => {
//     return element % 2 === 0;
//   });
// };

// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//or

const findEvenNumbers = (array) => {
  let resutArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      resutArr.push(array[i]);
    }
  }
  return resutArr;
};

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
