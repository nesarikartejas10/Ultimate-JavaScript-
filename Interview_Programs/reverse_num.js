function reverseNumber(num) {
  const numStr = num.toString();
  const reverseStr = numStr.split("").reverse().join("");
  const reverseNum = parseInt(reverseStr);

  return num < 0 ? -reverseNum : reverseNum;
}

console.log(reverseNumber(-1234));
