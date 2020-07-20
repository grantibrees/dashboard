
import Quote from "../models/quote.js"
import store from "../store.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//quotes.stormconsultancy.co.uk/random.json",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {
    this.getQuote()
  }
  getQuote() {
    _quoteApi.get("").then(res => {
      console.log(res);
      store.commit("quote", new Quote(res.data))
    }).catch(err => console.error(err))
  }

}

const quoteService = new QuoteService();
export default quoteService;
