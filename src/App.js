import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt me!"
      ),
      React.createElement(Pet, {
        name: "Moxie",
        animal: "cat",
        breed: "Tuxedo"
      }),
      React.createElement(Pet, {
        name: "Jack",
        animal: "cat",
        breed: "Tiger"
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      })
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
