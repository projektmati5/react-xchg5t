import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


class App extends React.Component{
constructor(){
  super();
this.state={

      sumCount: 0,
      totalCount: 0,
      doubleClickCount: 0}
};

render()
{return(
  <div><button onClick={this.increment.bind(this)}>+</button>
   <output>Suma: {this.state.sumCount}</output></div>




);


}


increment()
{
  this.setState(
    {
      sumCount:this.state.sumCount+1,
      totalCount:this.state.totalCount+1
      }
      )
   
}


}







ReactDOM.render(<App />, document.getElementById("app"));