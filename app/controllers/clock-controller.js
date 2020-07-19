import _clockService from "../services/clock-service.js";
import _store from "../store.js";
import Time from "../models/time.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)



export default class ClockController {
  constructor() {
    _store.subscribe("currentTime", this.drawTime)
    _store.subscribe("initialTimePull", this.drawDate)
  }

  drawTime() {
    document.getElementById("time-display").innerText = _store.State.currentTime.TimeString
  }
  drawDate() {
    console.log("drawDate attempted");
    document.getElementById("date-display").innerText = _store.State.currentTime.Date
    document.getElementById("greeting-display").innerText = _store.State.currentTime.Greeting
  }

}
