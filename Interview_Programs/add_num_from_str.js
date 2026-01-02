const str = "c123ode";

let result = 0;
for (let char of str) {
  if (/[0-9]/.test(char)) {
    result += parseInt(char);
  }
}

console.log(result);
