import Weather from "./models/weather.js";
import Time from "./models/time.js"
import Todo from "./models/todo.js"
import Quote from "./models/Quote.js"

let _djinnStorage = {
  tempObj: [{
    types: [
      {
        slot: 1,
        type: {
          name: "venus",
          url: "https://i.imgur.com/ACAg3yG.gif"
        }
      },
      {
        slot: 2,
        type: {
          name: "mars",
          url: "https://i.imgur.com/9dBSoCo.gif"
        }
      },
      {
        slot: 3,
        type: {
          name: "jupiter",
          url: "https://i.imgur.com/aiJcDD4.gif"
        }
      },
      {
        slot: 4,
        type: {
          name: "mercury",
          url: "https://i.imgur.com/lMHCh8s.gif"
        }
      }
    ],
    name: "djinn",
    img: "https://i.imgur.com/mkBPOT5.gif",
    weight: "1000",
    user: "grantignotusbrees",
  }]
}

// new Weather({ name: "loading", main: { temp: 0.0 } }) //temporary fake data

let _state = {
  /**@type {Weather[]} */
  weather: [],
  /**@type {Todo[]}*/
  todos: [],
  /**@type {Todo[]}*/
  recentTodo: [],
  /**@type {Todo[]}*/
  deleteTodoTarget: [],
  /**@type {Todo[]}*/
  newTodo: [],
  /**@type {Todo[]}*/
  initialTodoPull: [],
  tempImage: [],
  allImages: [],
  bgImage: [],
  /**@type {number}*/
  rawTime: 0,
  /**@type {Time[]}*/
  currentTime: [],
  initialTimePull: [],
  dayComparer: [],
  /**@type {Quote[]}*/
  quote: []
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  weather: [],
  todos: [],
  recentTodo: [],
  deleteTodoTarget: [],
  newTodo: [],
  initialTodoPull: [],
  tempImage: [],
  allImages: [],
  bgImage: [],
  rawTime: [],
  currentTime: [],
  initialTimePull: [],
  dayComparer: [],
  quote: []
};

/**
 * Validates the property string is defined in both the state and the listeners
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state.hasOwnProperty(prop) || !Array.isArray(_listeners[prop])) {
    throw new Error(
      `Unable to subscribe to ${prop}, please check your state and your listeners`
    );
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) {
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  get Djinn() {
    return _djinnStorage;
  }
  /**
   * Takes in a property to observe, and a function to run when it changes
   * @param {string} prop
   * @param {function} fn
   */
  subscribe(prop, fn) {
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
    _listeners[prop].forEach(fn => fn());
  }
}

const store = new Store();
export default store;
