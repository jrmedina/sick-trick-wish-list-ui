import { Component } from "react";
import React from "react";
import "../TrickForm/TrickForm.css";

class TrickForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      stance: "",
      obstacle: "",
      tutorial: "",
      id: Date.now(),
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    this.props.addTrick(this.state);
  };

  render() {
    return (
      <form className="TrickForm">
        <label>Choose your Stance:</label>

        <select
          name="stance"
          value={this.state.stance}
          onChange={this.handleInput}
          className="stance"
        >
          <option value="switch">Switch</option>
          <option value="regular">Regular</option>
        </select>

        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Name of Trick"
          onChange={this.handleInput}
          className="name"
        ></input>

        <label>Choose your Obsticle:</label>

        <select
          name="obstacle"
          value={this.state.obstacle}
          onChange={this.handleInput}
          className="obstacle"
        >
          <option value="ledge">Ledge</option>
          <option value="flat">Flat</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
          <option value="rail">Rail</option>
        </select>

        <input
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial"
          value={this.state.tutorial}
          onChange={this.handleInput}
          className="tutorial"
        ></input>
        <button type="button" onClick={this.handleSubmit}>
          Send It!
        </button>
      </form>
    );
  }
}

export default TrickForm;
