import { Component } from "react";
import "./App.css";
import { getData, postTrick } from "../apiCalls";
import TrickContainer from "../TrickContainer/TrickContainer";
import TrickForm from "../TrickForm/TrickForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    };
  }

  componentDidMount = () => {
    getData().then((data) => {
      this.setState({ tricks: data[0] });
    });
  };

  addTrick = (trick) => {
    postTrick(trick).then(() => {
      getData()
        .then((data) => this.setState({ tricks: data[0] }))
        .catch((err) => console.log(err));
    });
  };

  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickForm addTrick={this.addTrick} />
        <TrickContainer tricks={this.state.tricks} />
      </main>
    );
  }
}

export default App;
