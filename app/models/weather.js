
export default class Weather {



  constructor(data) {
    console.log(data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.minTemp = data.main.temp_min
    this.maxTemp = data.main.temp_max
    this.wind = data.wind.speed
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.farentemp = (((this.kelvin - 273.15) * 1.8) + 32).toFixed(1)
  }

  get Template() {
    let template = ""
    template += /*html*/`

    <div class="col-12 d-flex align-items-center text-end justify-content-end">
    <div class="align-content-end d-flex">
    <div class="custom-font-size-3">${this.farentemp}</div>
    <div class="align-self-end custom-font-size-2">&nbsp;°&nbsp;F</div>
    </div>
    </div>
    <div class="col-12 custom-font-size-2 d-flex justify-content-end">${this.city}</div>
    <div class="col-12 custom-font-size font-gold d-flex justify-content-end">${this.description}</div>

    `
    return template
  }
}