const input = document.querySelector("#input");

const debounce = (fn, delay = 1000) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const searchHandler = async (e) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${e.target.value}`
  );

  const data = await response.json();
  console.log(data);
};

const debounceFunc = debounce(searchHandler, 1000);

input.addEventListener("input", debounceFunc);
