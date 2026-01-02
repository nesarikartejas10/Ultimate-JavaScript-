let a = [10, 50, 40, 50, 30];

let searchElement = 70;
let flag = false;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] === searchElement) {
    console.log(`Element found at: ${i}`);
    flag = true;
  }
}

if (flag === false) {
  console.log("Element is not found");
}
