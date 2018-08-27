import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Moxy" animal="cat" breed="Tuxedo" />
        <Pet name="Jack" animal="cat" breed="Tiger" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
