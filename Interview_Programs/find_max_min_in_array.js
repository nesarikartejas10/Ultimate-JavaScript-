const arr = [50, 100, 40, 20, 60];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(`max: ${max} & min: ${min}`);
