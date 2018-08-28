import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
// track location animal and breed

export class SearchParams extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: ""
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            type="text"
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
            id="animal"
            value={this.state.animal}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default SearchParams;
