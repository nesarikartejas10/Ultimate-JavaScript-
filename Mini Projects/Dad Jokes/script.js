const apiBody = document.querySelector(".api-body");
const fetchJoke = document.querySelector(".fetch-joke");
const apiUrl = "https://icanhazdadjoke.com/";

fetchJoke.addEventListener("click", () => {
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      apiBody.innerText = data.joke;
    })
    .catch((error) => {
      apiBody.innerText = `Api is not working....Please check URL!!!`;
      console.log(error);
    });
});
