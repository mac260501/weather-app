/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class WeatherData {\n  constructor(city, region, country, temp_c, feels_like, humidity, wind) {\n    this.city = city;\n    this.region = region;\n    this.country = country;\n    this.temp_c = temp_c;\n    this.feels_like = feels_like;\n    this.humidity = humidity;\n    this.wind = wind;\n  }\n\n  getCity() {\n    return this.city;\n  }\n\n  getRegion() {\n    return this.region;\n  }\n\n  getCountry() {\n    return this.country;\n  }\n\n  getTempC() {\n    return this.temp_c;\n  }\n\n  getFeelsLike() {\n    return this.feels_like;\n  }\n\n  getHumidity() {\n    return this.humidity;\n  }\n\n  getWind() {\n    return this.wind;\n  }\n}\n\nasync function getWeatherData(location) {\n  const response = await fetch(\n    \"https://api.weatherapi.com/v1/current.json?key=dacb5f83938943048bd02548231605&q=\" +\n      location\n  );\n  const weatherData = await response.json();\n  console.log(weatherData);\n}\n\ngetWeatherData(\"milton usa\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;