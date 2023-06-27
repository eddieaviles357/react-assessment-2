import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";

export default function Main() {
  return (
  <BrowserRouter>
      <NavBar />
      <main>
        <Routes/>
      </main>
    </BrowserRouter>
  )
}