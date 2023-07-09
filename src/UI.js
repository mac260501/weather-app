import "./styles.css";
import { WeatherData, getWeatherData } from "./index.js";

export { buildPage };

const contentDiv = document.getElementById("content");
const form = document.createElement("form");
const input = document.createElement("input");
const searchBtn = document.createElement("button");

const weatherCard = document.createElement("div");
weatherCard.classList.add("weather-card");

const city = document.createElement("h2");
const region = document.createElement("p");
const country = document.createElement("p");

const temp = document.createElement("p");
const feelsLike = document.createElement("p");
const humidity = document.createElement("p");
const wind = document.createElement("p");

weatherCard.appendChild(city);
weatherCard.appendChild(region);
weatherCard.appendChild(country);

weatherCard.appendChild(temp);
weatherCard.appendChild(feelsLike);
weatherCard.appendChild(humidity);
weatherCard.appendChild(wind);

function buildPage() {
  // ----------- Header ----------
  const header = document.createElement("header");
  header.classList.add("header");

  const heading1 = document.createElement("h1");
  heading1.textContent = "Weather App";

  header.appendChild(heading1);

  // ----------- Main Div --------
  const main = document.createElement("div");
  main.classList.add("main");

  // ----------- Form ------
  form.classList.add("form");
  form.id = "searchForm";
  form.setAttribute("novalidate", true);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  input.type = "text";
  input.placeholder = "Enter location";
  input.id = "input";
  input.classList.add("input-field");

  searchBtn.textContent = "Search";
  searchBtn.id = "searchBtn";
  searchBtn.type = "submit";
  searchBtn.classList.add("search-btn");

  searchBtn.addEventListener("click", () => {
    let location = document.getElementById("input").value;

    if (location === "") {
      return;
    }
    loadWeatherInfo(location);
  });

  form.appendChild(input);
  form.appendChild(searchBtn);

  main.appendChild(form);
  main.appendChild(weatherCard);

  contentDiv.appendChild(header);
  contentDiv.appendChild(main);
}

function loadWeatherInfo(location) {
  const result = getWeatherData(location);
  result.then(function (weatherData) {
    temp.textContent = weatherData.getTempC();
  });
}
