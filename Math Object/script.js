//Math Object Properties
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

//Math functions
const x = Math.round(4.5); //5
console.log(x);

const y = Math.ceil(4.2); //5
console.log(y);

const z = Math.floor(4.8); //4
console.log(z);

const p = Math.pow(2, 5); //32
console.log(p);

const maxValue = Math.max(5, -7, 0, -2); //5
console.log(maxValue);

const minValue = Math.min(5, -7, 0, -2); //-7
console.log(minValue);

const randomNumber = Math.random();
console.log(randomNumber); //(0 to 1)

//0 to 9
console.log(Math.floor(Math.random() * 10));

//0 to 10
console.log(Math.floor(Math.random() * 11));

//0 to 100
console.log(Math.floor(Math.random() * 101));

//15 to 25

function getRandomNumber(max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

console.log(getRandomNumber(15, 25));

console.log(Number((Math.random() * 10).toFixed()));

//trunk
console.log(Math.trunc(4.8)); //4
