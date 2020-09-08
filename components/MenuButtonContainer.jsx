import React, { Component } from "react";
import MenuButton from "./MenuButton";
class MenuContainer extends Component {
  state = {
    buttons: [
      { key: 1, name: "Details" },
      { key: 2, name: "New" },
      { key: 3, name: "Copy" },
      { key: 4, name: "Delete" },
    ],
  };
  render() {
    return (
      <div className="menu">
        {this.state.buttons.map((button) => (
          <MenuButton key={button.key} name={button.name} />
        ))}
      </div>
    );
  }
}

export default MenuContainer;
