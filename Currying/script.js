function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(10, 20, 30));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(10)(20)(30));
