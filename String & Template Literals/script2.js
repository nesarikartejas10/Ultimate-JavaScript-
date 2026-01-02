const message = "Hello World!..";
// let string = "Hello World!..";
console.log(message.length);

const firstName = "I am Tejas";

const faltuMessage = "    Hi..My name is Tejas    ";

// //String Methods
console.log(message.toLowerCase());

console.log(message.toUpperCase());

console.log(faltuMessage.trim());

// console.log(faltuMessage.trimStart());

// console.log(faltuMessage.trimEnd());

console.log(message.includes("World")); //true

// console.log(message.indexOf("W"));

console.log(message.replace("World", "Duniya")); //Hello Duniya

// console.log(message.replaceAll("l", "L")); //HeLLo WorLd

// console.log(message.concat(firstName));
// console.log(message.concat(", ", firstName));

// const accountNum = "7865";
// console.log(accountNum.padStart(12, "*")); //************7865

// console.log(accountNum.padEnd(16, "*")); //7865************

// console.log(message.charAt(4)); //o

// console.log(message.charCodeAt(7)); //111 (ASCI Code)

const arr = firstName.split();
// console.log(arr);

// console.log(message.slice(1, 8)); //ello Wo
console.log(message.slice(-4)); //ello World!..

// let text = "Hello JavaScript";
// console.log(message.substring(1, 8));

// // Template Literals

// const myAccount = `My account number is ${accountNum}.`;
// console.log(myAccount);

const myString = "Javascript is the best";

const emp1 = { name: "John", empCode: "BLR1122P", gender: "Male" };
const emp2 = { name: "Mark", empCode: "NYC1322C", gender: "Male" };
const emp3 = { name: "Merry", empCode: "LON4321p", gender: "Female" };

//we can extract the character from string using its index
console.log(myString[6]); //r

//length- return total number of character in string
console.log(myString.length); //22

//indexOf()- return index of first occurance of character
console.log(myString.indexOf("i")); //7
console.log(myString.indexOf("z")); //-1

//lastIndexOf()- return index of last occurance of character
console.log(myString.lastIndexOf("s")); //20
console.log(myString.indexOf("z")); //-1

//slice()- extract a substring from string
console.log(myString.slice(11)); //is the best
console.log(myString.slice(11, 16)); //is th
console.log(myString.slice(-4)); // best (return last four characters)
console.log(myString.slice(5, -3)); //cript is the b

//Exersize1- find the first word from string
let index = myString.indexOf(" ");
let subString = myString.slice(0, index);
console.log(subString);

//Exersize2- find the last word from string
console.log(myString.slice(myString.lastIndexOf(" ") + 1));

// Seperator
console.log("_".repeat(30));
