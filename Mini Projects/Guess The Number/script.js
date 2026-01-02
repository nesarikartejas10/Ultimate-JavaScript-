const userInput = document.querySelector("#input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");
const submitBtn = document.querySelector(".submit-btn");
const startBtn = document.querySelector(".start-btn");

(function () {
  let computerGuess = Math.round(Math.random() * 100);
  let allGuessesArr = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputValue = parseInt(userInput.value);
    if (userInputValue < computerGuess) {
      result.innerText = "Too low!";
    } else if (userInputValue > computerGuess) {
      result.innerText = "Too high!";
    } else {
      result.innerText = "You got it! Congrats!";
      startBtn.disabled = false;
      startBtn.style.cursor = "pointer";
      submitBtn.disabled = true;
      submitBtn.style.cursor = "not-allowed";
      allGuessesArr = [];
    }
    allGuessesArr.push(userInputValue);
    allGuesses.innerText = `Your guesses: ${allGuessesArr.join(", ")}`;
    if (allGuessesArr.length === 10) {
      result.innerText = `You lost! The number was ${computerGuess}`;
      startBtn.disabled = false;
      startBtn.style.cursor = "pointer";
      submitBtn.disabled = true;
      submitBtn.style.cursor = "not-allowed";
      allGuessesArr = [];
    }
    form.reset();
  });

  startBtn.addEventListener("click", () => {
    result.innerText = "";
    allGuesses.innerText = "";
    startBtn.disabled = true;
    startBtn.style.cursor = "not-allowed";
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
    allGuessesArr = [];
    computerGuess = Math.round(Math.random() * 100);
  });
})();
