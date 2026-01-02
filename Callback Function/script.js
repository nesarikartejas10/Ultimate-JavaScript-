//Example-1
// function show() {
//   console.log("Hey");
// }

// function message(callback) {
//   callback();
// }

// message(show);

// Example-2

function show() {
  console.log("I am inside show");
}

setTimeout(show, 5000); //here show function passed as callback function
