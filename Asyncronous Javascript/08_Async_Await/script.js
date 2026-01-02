const apiBody = document.querySelector(".api-body");
const fetchJoke = document.querySelector(".fetch-joke");
const apiUrl = "https://icanhazdadjoke.com/";

async function fetchData() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    apiBody.innerText = data.joke;
  } catch (error) {
    apiBody.innerText = `Api is not working...please check URL!!!`;
  }
}

fetchData();
fetchJoke.addEventListener("click", fetchData);
