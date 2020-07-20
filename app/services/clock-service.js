import store from "../store.js"
import Time from "../models/time.js"
import ClockController from "../controllers/clock-controller.js";
import TodoService from "../services/todo-service.js"

// @ts-ignore
const clockApi = axios.create({
  baseURL: "//worldtimeapi.org/api/timezone/America/Boise",
  timeout: 3000
});


class ClockService {

  constructor() {
    this.pullTime()
    store.subscribe("rawTime", this.getTime)
    store.subscribe("initialTodoPull", this.todoFromYesterday)
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
      console.log("unixtime received: " + res.data.unixtime);

      store.commit("rawTime", res.data.unixtime.valueOf())
      this.timeInitializer()
      store.commit("initialTimePull", new Time(store.State.currentTime))
    }).catch(err => console.error(err))
  }

  todoFromYesterday() {
    let time = store.State.currentTime
    let compare = store.State.dayComparer
    let localHolder = window.localStorage.getItem("dayCompare")
    // @ts-ignore
    if (compare != time.day || compare.toString() != localHolder) {
      store.commit("dayComparer", new Time(time).day)
      // @ts-ignore
      window.localStorage.setItem("dayCompare", time.day)
      TodoService.todoFromYesterday()
    }
  }

}

const clockService = new ClockService();
export default clockService;
