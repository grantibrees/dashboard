import WeatherService from "../services/weather-service.js";
import _store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  document.getElementById("weather-draw").innerHTML = _store.State.weather.Template
}


export default class WeatherController {
  constructor() {
    _store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
