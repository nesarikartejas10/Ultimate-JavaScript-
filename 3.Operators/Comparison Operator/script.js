let a = 5;
let b = 2;

console.log(a < 2); //false
console.log(a > 2); //true
console.log(a <= 2); //false
console.log(a >= 2); //true
console.log(a == 2); //Loose Equality
console.log(a === 2); //Strict Equality
console.log(a != 2); //true
console.log(a !== 2); //true

//Loose Equality vs Strict Equality
let x = "10";
console.log(typeof x); // string

let y = 10;
console.log(typeof y); // number

console.log(x == y); // true

console.log(x === y); // false
