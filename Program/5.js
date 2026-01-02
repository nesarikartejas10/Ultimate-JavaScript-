//Program to find longest word in a given sentence

function findLongestWord(sentence) {
  const wordsArr = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("Hi I'm Saikrishna Iam a UI Developer"));
