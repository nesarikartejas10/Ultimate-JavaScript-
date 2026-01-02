const array = [2, [3, 4, [5, 6, [7, 8], 9], 10]];

let stack = [...array];
let result = [];

while (stack.length) {
  let value = stack.pop();

  if (Array.isArray(value)) {
    stack.push(...value);
  } else {
    result.push(value);
  }
}

console.log(result);
