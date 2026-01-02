let str = "madam";

let revStr = str.split("").reverse().join("");

if (str === revStr) {
  console.log("Given string is palindrome");
} else {
  console.log("Given string is not palindrome");
}
