import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import SnacksDrinksContext from "./SnacksDrinksContext";
import NotFound from "./NotFound";
import AddItemForm from "./AddItemForm";

// Handles routing
export default function Main() {
    const { snacks, drinks } = useContext(SnacksDrinksContext);

    return (
        <Switch>
            <Route exact path="/">
                <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
                <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
                <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
                <Menu snacks={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
                <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
                <AddItemForm />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
};