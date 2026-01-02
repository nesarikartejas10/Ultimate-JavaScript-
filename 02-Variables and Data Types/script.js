let number = 100;
//let=> keyword or specifier (for declaring variable)
//number=> variable name or identifier
//100=> value or data

//var
var a; //✅ declaration
a = 10; //✅ initialization
var box = 20; //✅ declaration + initialization
box = 40; // ✅ reassign
var box = 20; // ✅ redeclare

//let
let b; //✅ declaration
b = 20; //✅ initialization
let num = 30; //✅ declaration + initialization
num = 50; // ✅ reassign
// let num = 30; //❌ redeclare

//const
// const c; // ❌ declaration
const c = 30; //✅ declaration + initialization
// c = 45; // ❌ reassign
// const c= 40; // ❌ redeclare

// Data Types

// 1) String

// Double Quote => ""
// Single Quote => ''
// Backticks => ``

// let myName = "ahmed";
// console.log(myName);

// 2) Number

// let myNumber = 20; // simple or positive number
// let myDecimalNumber = 9.80; // decimal or float number
// let myNegativeNumber = -10; // negative number
// console.log(typeof myDecimalNumber);

// 3) Boolean

// let isActive = false;
// let isSubscribed = true;

// let a = 20;
// let b = 20;
// console.log(a === b);

// 4) null,

// let a = null;
// console.log(a);
// console.log(typeof a);

// 5) undefined
let count;
console.log(count); //undefined

// let b;
// console.log(b);
// console.log(typeof b);

// 6) bigint

// let num = 9007199254740991n * 8n;
// console.log(num);

// 7) Symbol

let idCard1 = Symbol("id");
let idCard2 = Symbol("id");

console.log(idCard1 === idCard2); //false
let copyIdCard1 = idCard1;
console.log(idCard1 === copyIdCard1); //true

const id = Symbol("id");
const user = {
  name: "Tejas",
  [id]: 12345, // Symbol as key
};

console.log(user.name); // Tejas
console.log(user[id]); // 12345
//Note: The id property won’t show up in for...in, Object.keys(), or JSON.stringify() — it’s hidden. but it still exist
console.log(Object.keys(user)); // [ 'name' ]
console.log(JSON.stringify(user)); // {"name":"Tejas"}
