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
{return(null);
}

}







ReactDOM.render(<App />, document.getElementById("app"));