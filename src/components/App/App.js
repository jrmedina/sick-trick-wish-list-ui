import { Component } from "react";
import "./App.css";
import { getData } from "../apiCalls";
import TrickContainer from "../TrickContainer/TrickContainer"
import TrickForm from "../TrickForm/TrickForm";

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
        <TrickForm/>
        <TrickContainer
        tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
