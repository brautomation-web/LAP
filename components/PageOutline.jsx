import React, { Component } from "react";
import ConfigNav from "./Buttons/ConfigManagerNavButton";
import SeqNav from "./Buttons/SeqManagerNavButton";
import StepNav from "./Buttons/StepManagerNavButton";
import CMNav from "./Buttons/CMManagerNavButton";

class Outline extends Component {
  state = {};
  render() {
    return (
      <div id="outline" style={{ marginTop: "100px" }}>
        <ConfigNav />
        <br></br>
        <SeqNav />
        <br></br>
        <StepNav />
        <br></br>
        <CMNav />
        <br></br>
      </div>
    );
  }
}

export default Outline;
