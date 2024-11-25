let inputSearch = document.querySelector("#input-search");
let searchBtn = document.querySelector("#search-button");
let cityName = document.querySelector(".city-name");
let cityTemp = document.querySelector(".city-temp");
let weatherType = document.querySelector(".weather-type");

import API_KEY from "./apikey";

const WEATHER_URL = (city) => {
  return `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
};

const weatherDisplay = async (city) => {
  console.log(city);
  let response = await fetch(WEATHER_URL(city));
  console.log(response);
  let result = await response.json();
  console.log(result);

  if (result.success !== false) {
    cityName.innerText = "City: " + result.location.name;
    cityTemp.innerText = "Temperature: " + result.current.temperature + "°C";
    weatherType.innerText = result.current.weather_descriptions[0];
    // console.log(result.current.weather_descriptions);
  } else {
    cityName.innerText = "City not found. Please try again.";
    // tempText.innerText = result.error.info;
    weatherType.textContent = "";
    cityTemp.innerText = "";
  }

  //   console.log(result.location.name);
  //   console.log(result.current.temperature);
  //   console.log(result.current.weather_descriptions[0]);
};

window.addEventListener("DOMContentLoaded", (e) => {
  //   console.log("DOM fully loaded and parsed");
  cityName.innerText = "Welcome to Simple weather app";
  cityTemp.innerText = "";
  weatherType.innerText = "";

  e.preventDefault();
});

searchBtn.addEventListener("click", () => {
  let inputValue = inputSearch.value.trim();
  inputSearch.value = "";

  if (inputValue) {
    // let city = inputValue.trim();
    //   cityName.innerText = "city found";
    //   console.log(inputValue);
    weatherDisplay(inputValue);
    //   console.log(weatherDisplay(inputValue));
  } else {
    cityName.innerText = "Couldn't find the city. Please try again later.";
    cityTemp.innerText = "";
    weatherType.innerText = "";
  }
});

inputSearch.addEventListener("click", () => {
  cityName.innerText = "Welcome to Simple weather app";
  cityTemp.innerText = "";
  weatherType.innerText = "";
});
