import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


function MojKomponent() {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <h2>Jestem ambitna/y, więc przerabiam kurs React.js komporent!3</h2>
    </div>
  );
}

function MojKomponent2() {
  return (
    <div>
      <dialog open>
        <h1>Tytuł</h1>
        <p>Treść</p>
      </dialog>
    </div>
  );
}





ReactDOM.render(
 <MojKomponent2/>,
  document.getElementById('app')
);
