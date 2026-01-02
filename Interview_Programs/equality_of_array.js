let arr1 = [4, 8, 10, 9, 5];
let arr2 = [4, 8, 1, 9, 5];

let flag = true;

if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false;
    }
  }
} else {
  flag = false;
}

if (flag) {
  console.log("Both arrays are equal");
} else {
  console.log("Both arrays are not equal");
}
