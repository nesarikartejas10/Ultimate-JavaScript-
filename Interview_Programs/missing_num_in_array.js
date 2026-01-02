function missingArray(arr) {
  const missArr = [];
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);

  for (let i = minNum; i <= maxNum; i++) {
    if (arr.indexOf(i) < 0) {
      missArr.push(i);
    }
  }
  return missArr;
}

console.log(missingArray([1, 2, 3, 6])); //[4,5]
