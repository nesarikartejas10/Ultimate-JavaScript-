//Function Declaration
function greet(name) {
  return `Hello ${name}`;
}

//Function Expression
const greet = function (name) {
  return `Hello ${name}`;
};

//Arrow Function
const greet = (name) => {
  return `Hello ${name}`;
};

//Function() constructor
const greet = new Function("name", "return `Hello ${name}`");
