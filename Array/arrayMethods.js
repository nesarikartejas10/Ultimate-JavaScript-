const fruits = ["Apple", "Banana", "Grape", "Dates"];

//push
console.log(fruits.push("Orange"));
console.log(fruits);

//pop
console.log(fruits.pop());
console.log(fruits);

//unshift
console.log(fruits.unshift("Guava"));
console.log(fruits);

//shift
console.log(fruits.shift());
console.log(fruits);

//splice
console.log(fruits.splice(1, 1, "Pinapple"));
console.log(fruits);

//indexOf
const students = ["Ram", "Hari", "Sita", "Hari", "Vishal", "Gita"];
console.log(students.indexOf("Hari")); //1
console.log(students.indexOf("Tejas")); //-1

//lastIndexOf
console.log(students.lastIndexOf("Hari")); //3
console.log(students.lastIndexOf("Tejas")); //-1

//includes
console.log(students.includes("Gita")); //true
console.log(students.includes("Tejas")); //false

//slice
console.log(students.slice(2)); //['Sita', 'Vishal', 'Gita']
console.log(students.slice(-1)); //['Gita']
console.log(students.slice(1, -1)); //['Hari', 'Sita', 'Vishal']

//reverse
console.log(students.reverse()); //['Gita', 'Vishal', 'Sita', 'Hari', 'Ram']

//concat
let arr1 = [10, 20, 30];
let arr2 = [30, 40, 50];
let arr3 = [50, 60, 70];

console.log(arr1.concat(arr2, arr3));

//join
const arr = ["Javascript", "is", "the", "best"];
console.log(arr.join(" ")); //Javascript is the best

//sort
const names = ["John", "Bob", "Adam", "Casey", "Damien"];
const numbers = [7, 22, 11, 9, 15, 25, 101, 205];
const animals = ["cat", "Dog", "Horse", "elephant", "bee", "ant"];

//sorting string arrays
const sortedName = names.sort(); //in ascending
console.log(sortedName); //['Adam', 'Bob', 'Casey', 'Damien', 'John']

console.log(sortedName.reverse()); //in descending order ['John', 'Damien', 'Casey', 'Bob', 'Adam']

//sorting numeric array in ascending
const ascendingNumbers = numbers.sort((a, b) => a - b);
console.log(ascendingNumbers); //[7, 9, 11, 15, 22, 25, 101, 205]

//sorting numeric array in descending
const descendingNumbers = numbers.sort((a, b) => b - a);
console.log(descendingNumbers); //[205, 101, 25, 22, 15, 11, 9, 7]
