
export default class Quote {
  constructor(data) {
    console.log(data);
    this.quote = data.quote
    this.author = data.author
  }
  get QuoteTemplate() {
    return `${this.quote}`

  }
  get AuthorTemplate() {
    return `${this.author}`
  }
}