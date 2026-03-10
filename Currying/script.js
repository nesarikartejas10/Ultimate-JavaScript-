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
console.log(curriedSum(10));

function calculateGST(rate) {
  return function (price) {
    return price + price * rate;
  };
}

const gst = calculateGST(0.18); //here we fixed rate as 18% and we can reuse this function for different prices

console.log(gst(500)); //590
console.log(gst(1000)); //1180
