import React, { useState, useEffect } from "react";
import Main from './Main';
import "./App.css";
import SnackOrBoozeApi from "./Api";

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
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
    <Main snacks={snacks} drinks={drinks}/>
    </div>
  );
}

export default App;
