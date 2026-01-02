const secretMessage = "  WELCOME TO THE CODING ADVENTURE  ";
const encrypted = "dlrow olleh";
const phrase = "JavaScript,Python,Ruby,Go";
const mysteryCode = "findTheHiddenWord";
const repeated = "ha";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 1. Remove all the extra spaces from both ends of secretMessage
console.log(secretMessage);
console.log(secretMessage.trim());

// 2. Convert the entire secretMessage to lowercase
console.log(secretMessage.toLowerCase());

// 3. Convert the entire alphabet to uppercase
console.log(alphabet.toUpperCase());

// 4. Get just the first 7 letters from secretMessage (after trimming)
console.log(secretMessage.trim().slice(0, 8));
//or
console.log(secretMessage.trim().substring(0, 8));

console.log(secretMessage.trim().substring(-6)); //if we pass -ve index then it will treat 0 index
console.log(secretMessage.trim().slice(-6)); //return last 6 characters

// 5. Get the last 9 letters from secretMessage (after trimming)
console.log(secretMessage.trim().slice(-9));
console.log(secretMessage.trim().substring(22));

// 6. Reverse the order of all characters in encrypted to reveal the hidden message
console.log(encrypted.split("").reverse().join(""));

// 7. Break apart phrase into separate pieces wherever you see a comma
console.log(phrase.split(","));

// 8. Find what position the word "TO" starts at in secretMessage
console.log(secretMessage.trim().indexOf("TO"));

// 9. Find what position the word "CODING" starts at, but search from the end backwards
console.log(secretMessage.trim().lastIndexOf("CODING"));

//10. Check if secretMessage contains the word "ADVENTURE" anywhere inside it
console.log(secretMessage.includes("ADVENTURE"));

// 11. Check if secretMessage begins with "WELCOME"
console.log(secretMessage.trim().startsWith("WELCOME"));

// 12. Check if secretMessage finishes with "ADVENTURE"
console.log(secretMessage.trim().endsWith("ADVENTURE"));

// 13. Get the single character at position 8 in secretMessage
console.log(secretMessage.trim().charAt(8));

// 14. Find the Unicode number of the very first character in alphabet
console.log(alphabet.charCodeAt(0)); //a-97

// 15. Create a character from the Unicode number 66
console.log(String.fromCharCode(66)); //B

// 16. Combine all words in this array into one string separated by spaces: ["Code", "Every", "Day"]
const arr = ["Code", "Every", "Day"];
console.log(arr.join(" "));

// 17. Make repeated appear 5 times in a row
console.log(repeated.repeat(5));

// 18. Swap every "a" in "banana" with "o"
const fruit = "banana";
console.log(fruit.replaceAll("a", "o"));
//or
console.log(fruit.replace(/a/g, "o"));

// 19. Swap only the FIRST "a" in "banana" with "o"
console.log(fruit.replace("a", "o"));

// 20. Find matches of all vowels (a, e, i, o, u) in "education" using a pattern
const word = "educationaaaA";
console.log(word.match("c")); //['c', index: 3, input: 'education', groups: undefined]
console.log(word.match(/a/)); //['a', index: 4, input: 'education', groups: undefined]
console.log(word.match(/a/g)); // ['a', 'a', 'a', 'a']
console.log(word.match(/a/gi)); //['a', 'a', 'a', 'a', 'A']

// 21. Find what position the letter "e" appears at in "developer"
console.log("developer".indexOf("e"));
//or
console.log("developer".search("e"));

// 22. Find what position the LAST letter "e" appears at in "developer"
console.log("developer".lastIndexOf("e"));

// 23. Get the character code of the letter at position 0 in "Hello"
console.log("Hello".charCodeAt(0));

// 24. Remove the first 4 letters from mysteryCode
console.log(mysteryCode.substring(4));
console.log(mysteryCode.slice(4));

// 25. Remove the last 4 letters from mysteryCode
console.log(mysteryCode.substring(0, mysteryCode.length - 4));

// 26. Remove spaces from the start of " hello"
console.log(" hello".trimStart());

// 27. Remove spaces from the end of "hello "
console.log("hello ".trimEnd());

// 28. Make the text fit exactly 20 characters by adding dots at the end: "JS"
console.log("JS".padEnd(20, "."));

// 29. Make the text fit exactly 20 characters by adding dots at the beginning: "JS"
console.log("JS".padStart(20, "."));

// 30. Turn "hello world" into an array where each character is a separate element
const str = "hello world";
console.log(str.split(""));

// 31. Check if "racecar" is the same when you read it forwards and backwards
const x = "racecar";
console.log(x === x.split("").reverse().join(""));

// 32. concat()
console.log(mysteryCode.concat(repeated, alphabet));
