// 1️⃣ Reverse a String (Manual Method Only)
// Input: "javascript"
// Output: "tpircsavaj" ✨ Use a loop — no .reverse().
function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

console.log(reverseString("abcd"));

//2️⃣ Check if a String is a Palindrome(using 2-pointer reversed string method)
// Input: "racecar"
// Output: Palindrome
function isPalindrome(str) {
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(isPalindrome("raceca"));

//3️⃣ Count Frequency of Each Character
// Input: "banana"
// Output: { b:1, a:3, n:2 } ✨ Teaches hash maps / JS objects + iteration.

function countFrequency(str) {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

console.log(countFrequency("banana"));
