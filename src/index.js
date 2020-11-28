import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


function MojKomponent() {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <h2>Jestem ambitna/y, więc przerabiam kurs React.js komporent!</h2>
    </div>
  );
}



ReactDOM.render(
 <MojKomponent />,
  document.getElementById('app')
);
