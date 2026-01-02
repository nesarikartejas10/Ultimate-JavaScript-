const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const count = document.querySelector(".count");
const changeBy = document.querySelector("#changeBy");
const resetBtn = document.querySelector(".reset-btn");

minusBtn.addEventListener("click", () => {
  const changeByValue = parseInt(changeBy.value);
  count.innerText = currCount - changeByValue;
});

plusBtn.addEventListener("click", () => {
  const currCount = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value);
  count.innerText = currCount + changeByValue;
});

resetBtn.addEventListener("click", () => {
  count.innerText = 0;
});
