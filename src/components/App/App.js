import { Component } from "react";
import "./App.css";
import { getData } from "../apiCalls";
import TrickContainer from "../TrickContainer/TrickContainer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    };
  }

  componentDidMount = () => {
    getData().then(data => {
      this.setState({tricks: data[0]})
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickContainer
        tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
