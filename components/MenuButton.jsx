import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./Styles/Grids.css";
class MenuButton extends Component {
  state = { name: this.props.name };
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          style={{
            width: "100px",
            height: "50px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          {this.state.name}
        </Button>
      </div>
    );
  }
}

export default MenuButton;
