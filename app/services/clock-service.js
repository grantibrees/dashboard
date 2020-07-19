import store from "../store.js"

// @ts-ignore
const clockApi = axios.create({
  baseURL: "//worldtimeapi.org/api/timezone/America/Boise",
  timeout: 3000
});


//TODO create methods to retrieve data trigger the update window when it is complete
class ClockService {

  constructor() {
    store.subscribe("timeData", this.pullTime)
    this.timeInitializer()
  }

  timeInitializer() { setInterval(this.pullTime, 1000) }

  getTime(unixtime) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unixtime * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

  }
  pullTime() {
    clockApi.get("").then(res => {
      console.log(res);
      store.commit("rawTimeObject", res)
      this.getTime(res.unixtime)
      let parsedTime = new Time(parseTime(res.currentDateTime))
      store.commit("timeData", parsedTime)
    }).catch(err => console.error(err))

    store.commit("currentTime")
  }

  parseTime() {

  }

  softizer(timeData) {
    let hour = timeData.hour /*a string */
    let min = timeData.min /*a number */
    let hourplus = timeData.hourplus /*a string */
    if (min < 3) {
      return hour
    } else if (min >= 3 && min < 8) {
      return "five past " + hour
    } else if (min >= 8 && min < 13) {
      return "ten past " + hour
    } else if (min >= 13 && min < 18) {
      return "fifteen past " + hour
    } else if (min >= 18 && min < 23) {
      return "twenty past " + hour
    } else if (min >= 23 && min < 28) {
      return "twenty-five past " + hour
    } else if (min >= 28 && min < 33) {
      return "half past" + hour
    } else if (min >= 33 && min < 38) {
      return "twenty-five to " + hourplus
    } else if (min >= 38 && min < 43) {
      return "twenty to " + hourplus
    } else if (min >= 43 && min < 48) {
      return "fifteen to " + hourplus
    } else if (min >= 48 && min < 53) {
      return "ten to " + hourplus
    } else if (min >= 53 && min < 57) {
      return "five to " + hourplus
    } else if (min >= 57) {
      return hourplus
    }
  }


  addImage(ImageData) {
    console.log(ImageData);
    let image = new Image(ImageData)
    store.commit("tempImage", image)
    imgApi2.post("heroes/", store.State.tempImage).then(res => {
      console.log(res.data);

    }).catch(err => console.error(err))
  }

  imageSelector() {
    let oneImageUrl = store.State.allImages[Math.floor(Math.random() * (store.State.allImages.length))]
    console.log(oneImageUrl);
    store.commit("bgImage", oneImageUrl)
  }

  pullImage() {
    imgApi2.get("heroes").then(res => {
      console.log(res);
      store.commit("allImages", res.data.data.map(rawImageData => rawImageData.img))
    }).catch(err => console.error(err))
  }

}

const imageService = new ImageService();
export default imageService;
