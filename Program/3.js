//How to check whether a string is palindrome or not?

const checkPalindrome = (str) => {
  const reverseString = str.split("").reverse().join("");

  if (str === reverseString) {
    return "Given string is palindrome";
  } else {
    return "Given string is not palindrome";
  }
};

console.log(checkPalindrome("madam"));
