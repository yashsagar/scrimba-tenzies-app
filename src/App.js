import React from "react";
import Dies from "./Dies.js";

function App() {
  return (
    <div id="mainContainer">
      <h1>Tenzies</h1>
      <p className="textArea">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dies />
      <button id="btn">Roll</button>
    </div>
  );
}

export default App;
