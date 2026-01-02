const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const form = document.querySelector("form");

//input event
// userName.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   console.log("input event triggered");
// });

//change event
// userName.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   console.log("change event triggered");
// });

//focus event
// userName.addEventListener("focus", (e) => {
//   console.log(e.type);
//   console.log("focus event triggered");
// });

//blur event
// userName.addEventListener("blur", (e) => {
//   console.log(e.type);
//   console.log("blur event triggered");
// });

//submit event
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const myFormData = new FormData(form);

//   for (let data of myFormData.entries()) {
//     console.log(data);
//   }
// });

//e.target vs e.currentTarget
form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
});
