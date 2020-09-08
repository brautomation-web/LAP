import React, { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import BottomNavBar from "./components/BottomNavBar";
import GridViews from "./components/GridViews";
import MenuContainer from "./components/MenuButtonContainer";
import Outline from "./components/PageOutline";
import { ScrollTracked } from "./components/ScrollHandlers/ConfigManagerScroll";
import "./components/Styles/Grids.css";
import { Button } from "@material-ui/core";

function App() {
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <title>Hello World</title>
      <NavBar />
      <GridViews />
      <MenuContainer />

      <div
        id="outlineBox"
        style={{
          position: "fixed",
          top: 150,
          right: 0,
          height: "150px",
          width: "230px",
          border: "solid",
          borderColor: "blue",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: 140,
          right: 170,
          paddingRight: "10px",
          fontSize: "20px",
          backgroundColor: "white",
        }}
      >
        Outline
      </div>
      <Outline style={{ marginTop: "100px" }} />
      <BottomNavBar />
    </div>
  );
}

export default ScrollTracked(App);
