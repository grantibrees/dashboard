import store from "../store.js"
import Time from "../models/time.js"
import ClockController from "../controllers/clock-controller.js";

// @ts-ignore
const clockApi = axios.create({
  baseURL: "//worldtimeapi.org/api/timezone/America/Boise",
  timeout: 3000
});


class ClockService {

  constructor() {
    this.pullTime()
    store.subscribe("rawTime", this.getTime)
  }

  timeInitializer() {
    setInterval(this.timeIncrementer, 1000)
  }
  timeIncrementer() {
    let rawT = ++store.State.rawTime
    store.commit("rawTime", rawT.valueOf())
  }

  getTime() {
    let unixTimeMil = store.State.rawTime * 1000
    let date = new Date(unixTimeMil);
    let timeData = {
      second: date.getSeconds(),
      minute: date.getMinutes(),
      hour: date.getHours(),
      day: date.getDate(),
      weekday: date.getDay(),
      month: date.getMonth(),
    }
    store.commit("currentTime", new Time(timeData))

  }

  pullTime() {
    clockApi.get("").then(res => {
      console.log(res);
      console.log(res.data.unixtime);

      store.commit("rawTime", res.data.unixtime.valueOf())
      this.timeInitializer()
      store.commit("initialTimePull", new Time(store.State.currentTime))
    }).catch(err => console.error(err))
  }


}

const clockService = new ClockService();
export default clockService;
