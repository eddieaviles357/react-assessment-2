import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

export default function Main({snacks, drinks}) {
    return (
    <BrowserRouter>
        <NavBar />
        <main>

        </main>
      </BrowserRouter>
    )
}