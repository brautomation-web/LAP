import React, { Component } from "react";
import Appbar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

class NavBar extends Component {
  state = { position: "static" };
  render() {
    return (
      <div id="AppBar">
        <Appbar position={this.state.position}>
          <Toolbar>
            <div style={{ marginRight: "auto" }}>
              <h2> LAP Configuration</h2>
              <h4
                style={{
                  fontSize: "10px",
                  position: "absolute",
                  top: "37px",
                  paddingLeft: "5px",
                }}
              >
                A Blue Ridge Application
              </h4>
            </div>
          </Toolbar>
        </Appbar>
      </div>
    );
  }
}

export default NavBar;
