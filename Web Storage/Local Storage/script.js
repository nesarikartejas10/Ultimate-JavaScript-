//Storing Data
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("isLoggedin", "true");

//Retrieving Data
const UserName = localStorage.getItem("username");
console.log(UserName); //JohnDoe

const isLoggedIn = localStorage.getItem("isLoggedin") === "true";
console.log(isLoggedIn);

//Storing and Retrieving Objects
const user = {
  name: "John",
  age: 30,
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);

//Remove specific data
localStorage.removeItem("isLoggedin");

//clear all data
localStorage.clear();
