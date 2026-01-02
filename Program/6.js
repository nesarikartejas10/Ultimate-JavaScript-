//Write a JavaScript program to find the maximum number in an array.

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([10, -33, 20, 55, 0]));
