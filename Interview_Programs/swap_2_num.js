let a = 10;
let b = 20;

//using 3rd variable
// let temp = a;
// a = b;
// b = temp;
// console.log(`value of a is ${a}, value of b is ${b}`);

//without using 3rd variable
[a, b] = [b, a];
console.log(`value of a is ${a}, value of b is ${b}`);
