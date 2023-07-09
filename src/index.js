import { buildPage } from "./UI";
export { WeatherData, getWeatherData };

class WeatherData {
  constructor(city, region, country, temp_c, feels_like, humidity, wind) {
    this.city = city;
    this.region = region;
    this.country = country;
    this.temp_c = temp_c;
    this.feels_like = feels_like;
    this.humidity = humidity;
    this.wind = wind;
  }

  getCity() {
    return this.city;
  }

  getRegion() {
    return this.region;
  }

  getCountry() {
    return this.country;
  }

  getTempC() {
    return this.temp_c;
  }

  getFeelsLike() {
    return this.feels_like;
  }

  getHumidity() {
    return this.humidity;
  }

  getWind() {
    return this.wind;
  }
}

async function getWeatherData(location) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=dacb5f83938943048bd02548231605&q=" +
      location
  );

  const rawData = await response.json();

  const weatherData = new WeatherData(
    rawData.location.name,
    rawData.location.region,
    rawData.location.country,
    rawData.current.temp_c,
    rawData.current.feelslike_c,
    rawData.current.humidity,
    rawData.current.wind_kph
  );

  return weatherData;
}

buildPage();
