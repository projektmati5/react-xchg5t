import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


class App extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (

      
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <output>{this.state.counter}</output>
        <button>-</button>
      </div>
    );
  }
}

ReactDOM.render(
 <App/>,
  document.getElementById('app')
);
