export default class Time {
  constructor(data) {
    this.second = data.second
    this.minute = data.minute
    this.hour = data.hour
    this.day = data.day
    this.weekday = data.weekday
    this.month = data.month

    if (this.minute >= 33) {
      this.hour++
    }


  }

  get TimeString() {
    let hourstring = (this.hour == 0 || this.hour == 12) ? "twelve" : (this.hour == 1 || this.hour == 13) ? "one" : (this.hour == 2 || this.hour == 14) ? "two" : (this.hour == 3 || this.hour == 15) ? "three" : (this.hour == 4 || this.hour == 16) ? "four" : (this.hour == 5 || this.hour == 17) ? "five" : (this.hour == 6 || this.hour == 18) ? "six" : (this.hour == 7 || this.hour == 19) ? "seven" : (this.hour == 8 || this.hour == 20) ? "eight" : (this.hour == 9 || this.hour == 21) ? "nine" : (this.hour == 10 || this.hour == 22) ? "ten" : (this.hour == 11 || this.hour == 23) ? "eleven" : "who knows when"

    let hourname = hourstring /*a string */
    let min = this.minute /*a number */
    function softizer() {
      if (min < 3) {
        return hourname + " o'clock"
      } else if (min >= 3 && min < 8) {
        return "five past " + hourname
      } else if (min >= 8 && min < 13) {
        return "ten past " + hourname
      } else if (min >= 13 && min < 18) {
        return "a quarter past " + hourname
      } else if (min >= 18 && min < 23) {
        return "twenty past " + hourname
      } else if (min >= 23 && min < 28) {
        return "twenty-five past " + hourname
      } else if (min >= 28 && min < 33) {
        return "half past " + hourname
      } else if (min >= 33 && min < 38) {
        return "twenty-five to " + hourname
      } else if (min >= 38 && min < 43) {
        return "twenty to " + hourname
      } else if (min >= 43 && min < 48) {
        return "a quarter to " + hourname
      } else if (min >= 48 && min < 53) {
        return "ten til " + hourname
      } else if (min >= 53 && min < 57) {
        return "five til " + hourname
      } else if (min >= 57) {
        return hourname + " o'clock"
      }
    }
    let timeString = softizer()

    return timeString
  }

  get Date() {
    let monthString = (this.month == 0) ? "January" : (this.month == 1) ? "February" : (this.month == 2) ? "March" : (this.month == 3) ? "April" : (this.month == 4) ? "May" : (this.month == 5) ? "June" : (this.month == 6) ? "July" : (this.month == 7) ? "August" : (this.month == 8) ? "September" : (this.month == 9) ? "October" : (this.month == 10) ? "November" : "December"

    let dayEnd = ""
    if (this.day > 3 && this.day < 21) dayEnd = "th";
    switch (this.day % 10) {
      case 1: dayEnd = "st";
      case 2: dayEnd = "nd";
      case 3: dayEnd = "rd";
      default: dayEnd = "th";
    }
    let fullString = this.day + dayEnd + " of " + monthString

    return fullString
  }

  get Greeting() {
    let textGreeting = (this.hour >= 5 && this.hour < 12) ? "Good morning" : (this.hour >= 12 && this.hour < 17) ? "Pleasant afternoon" : (this.hour >= 17 && this.hour < 22) ? "Lovely eventide" : (this.hour >= 22 || this.hour < 2) ? "Good evening" : "My, you're up late"
    return textGreeting
  }
}

