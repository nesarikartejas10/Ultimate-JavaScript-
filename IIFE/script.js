// IIFE
/*(function () {
  console.log("Hello, World!!!");
})();

(function (name, timeOfDay) {
  console.log(timeOfDay + " " + name + ". Welcome back!!");
})("Tejas", "Good morning"); */

//Use of IIFE
//Developer 1
(function () {
  var fName = "Tejas";

  function greet(name) {
    console.log("Wecome back, " + name);
  }
  greet(fName);
})();

//Developer 2
(function () {
  var fName = "Soham";

  function greet(name) {
    console.log("Good afternoon, " + name);
  }
  greet(fName);
})();
