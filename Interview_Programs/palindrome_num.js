let num = 121;

let revNum = parseInt(num.toString().split("").reverse().join(""));

if (num === revNum) {
  console.log("Given num is palindrome");
} else {
  console.log("Given num is not palindrome");
}
