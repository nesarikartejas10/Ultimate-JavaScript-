const birthYears = [1965, 2001, 2005, 1995, 1997];

//Calculate all ages in the form of array

//using for-of
// const ages = [];
// for (let birthYear of birthYears) {
//   ages.push(2024 - birthYear);
// }

// console.log(ages);

//using forEach()
// const ages = [];
// birthYears.forEach((ele) => {
//   ages.push(2024 - ele);
// });

// console.log(ages);

//using map()
const ages = birthYears.map((ele) => {
  return 2024 - ele;
});

console.log(ages);
