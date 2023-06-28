import React, { useState, useEffect } from "react";
import Main from './Main';
import "./App.css";
import SnackOrBoozeApi from "./Api";
import SnacksDrinksContext from "./SnacksDrinksContext";
import slugify from "slugify";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);


  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks)
      setIsLoading(false);
    }
    getSnacks();
  }, [isLoading]);

  async function addItem({ type, name, description, recipe, serve }) {
    // lower case name as we are going to use this as the id
    // slugify also will replace a space with -. Eg( Big Car -> big-car )
    let id = slugify(name, { lower: true });
    let item = { id, name, description, recipe, serve };
    await SnackOrBoozeApi.addItem(type, item);
    // trigger useEffect to rerender and update data in db
    setIsLoading(true)
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
    <SnacksDrinksContext.Provider value={{snacks, drinks, addItem}}>
      <Main />
    </SnacksDrinksContext.Provider>
    </div>
  );
}

export default App;
