import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";

export default function Main({snacks, drinks}) {
    return (
    <BrowserRouter>
        <NavBar />
        <main>
          <Routes snacks={snacks} drinks={drinks} />
        </main>
      </BrowserRouter>
    )
}