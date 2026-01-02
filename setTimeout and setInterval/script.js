// //setTimeout
// function sayHi() {
//   alert("Hi");
// }

// const id1 = setTimeout(sayHi, 5000);
// console.log(id1); //timer id

// //with arguments
// function sayHello(phrase, who) {
//   alert(phrase + " " + who);
// }

// const id2 = setTimeout(sayHello, 3000, "Hello", "Tejas");
// console.log(id2);

// clearTimeout(id1); //clear setTimeout for id1

// //setInterval
// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert("tick"), 2000);

// // after 5 seconds stop
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("stop");
// }, 5000);

//Interview Questions

// console.log("Script Start");

// setInterval(() => {
//   console.log("Inside setTimeout");
// }, 1000);

// for (let i = 1; i <= 100; i++) {
//   console.log("Inside for loop");
// }

// console.log("Script End");

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }
