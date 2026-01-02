let arr = ["Tejas", "Soham", "Kishore", "Prasad", "Prachi", "Prachi"];

const result = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(result);
