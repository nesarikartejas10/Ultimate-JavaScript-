let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let W_icon = document.querySelector(".weather-icon");
let w_temperature = document.querySelector(".weather-temperature");
let w_minTemp = document.querySelector(".weather_min");
let w_maxTemp = document.querySelector(".weather_max");
let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");
let citySearch = document.querySelector(".weather_search");
//API key - 2b175f7b74b97dd6935764d2db769d6b

//disply country name
const getCountryName = (countryCode) => {
  return new Intl.DisplayNames([countryCode], { type: "region" }).of(
    countryCode
  );
};

//to get date and time
const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
  console.log(curDate);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  console.log(formatter);
  return formatter.format(curDate);
};

let city = "pune";

//search functionality
citySearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let city_name = document.querySelector(".city_name");
  city = city_name.value;
  console.log(city);
  getWeatherData();
  city_name.value = "";
});

const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2b175f7b74b97dd6935764d2db769d6b`;
  try {
    const res = await fetch(weatherUrl);
    const data = await res.json();
    const { main, name, weather, wind, sys, dt } = data;

    cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
    dateTime.innerHTML = getDateTime(dt);

    w_forecast.innerHTML = weather[0].main;
    W_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`;

    w_temperature.innerHTML = `<strong>${main.temp}&#176</strong>`;
    w_minTemp.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
    w_maxTemp.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;
    w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
    w_humidity.innerHTML = `${main.humidity}%`;
    w_wind.innerHTML = `${wind.speed} m/s`;
    w_pressure.innerHTML = `${main.pressure} hpa`;
  } catch (error) {
    console.log(error);
  }
};

document.body.addEventListener("load", getWeatherData());
