import QuoteService from "../services/quote-service.js";
import store from "../store.js"
import Quote from "../models/quote.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function _drawQuote() {

  document.getElementById("quote").innerText = store.State.quote.QuoteTemplate
  document.getElementById("author").innerText = store.State.quote.AuthorTemplate
}


export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote)
  }
}