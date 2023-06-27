import axios from "axios";

// const BASE_API_URL = "http://localhost:3000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/


class SnackOrBoozeApi {
  // get snacks from db
  static async getSnacks() {
    return snacks;
  }
 // get drinks from db
  static async getDrinks() {
    return drinks;
  }
  // add snacks to db
  static async addSnacks(data) {
    snacks.push(data);
  }
  // add drinks to db
  static async addDrinks(data) {
    drinks.push(data);
  }
}

// json-server will not work so we just sending data without using axios.
const snacks = [
  {
    "id": "nachos",
    "name": "Nachos",
    "description": "An American classic!",
    "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
    "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  },
  {
    "id": "hummus",
    "name": "Hummus",
    "description": "Sure to impress your vegan friends!",
    "recipe": "Purchase one container of hummus.",
    "serve": "Place unceremoniously on the table, along with pita bread."
  },
  {
    "id": "arugula-and-walnut-salad",
    "name": "Arugula and Walnut Salad",
    "description": "Tart and delicious.",
    "recipe": "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.",
    "serve": "Place on tiny, precious little plates."
  }
];

const drinks = [
  {
    "id": "martini",
    "name": "Martini",
    "description": "An ice-cold, refreshing classic.",
    "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
    "serve": "Serve very cold, straight up."
  },
  {
    "id": "negroni",
    "name": "Negroni",
    "description": "A nice drink for a late night conversation.",
    "recipe": "Mix equal parts of gin, Campari, and sweet vermouth.",
    "serve": "Serve cold, either on the rocks or straight up."
  },
  {
    "id": "gin-and-tonic",
    "name": "Gin and Tonic",
    "description": "Like regular tonic, but with gin.",
    "recipe": "Mix 2 parts gin & 1 part tonic water.",
    "serve": "Serve in a tall glass over ice, garnished with a lime wedge."
  },
  {
    "id": "diet-coke",
    "name": "Diet Coke",
    "description": "Crisp!",
    "recipe": "Open can.",
    "serve": "Immediately."
  }
];

export default SnackOrBoozeApi;
