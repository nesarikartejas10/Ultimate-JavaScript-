const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 226);
  const green = Math.floor(Math.random() * 226);
  const blue = Math.floor(Math.random() * 226);
  const rgb = `rgb(${red},${green},${blue})`;

  body.style.backgroundColor = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.backgroundColor;
});
