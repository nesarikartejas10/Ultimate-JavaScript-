const input = document.querySelector("#input");

const apiCall = (e) => {
  console.log("api called", e.target.value);
};

const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

input.addEventListener("input", debounce(apiCall, 1000));
