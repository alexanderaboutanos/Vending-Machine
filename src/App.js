/** @format */

import "./App.css";
import VendingMachine from "./VendingMachine";
import Skittles from "./Skittles";
import SunflowerSeeds from "./SunflowerSeeds";
import PurpleFanta from "./PurpleFanta";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/skittles">
          <Skittles />
        </Route>
        <Route exact path="/sunflower-seeds">
          <SunflowerSeeds />
        </Route>
        <Route exact path="/purple-fanta">
          <PurpleFanta />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
