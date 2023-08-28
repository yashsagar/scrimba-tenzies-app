import React from "react";
import Dies from "./Dies.js";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  function creatRandomNumber() {
    return Math.floor(Math.random() * 6);
  }

  function createDie() {
    return {
      value: creatRandomNumber(),
      id: nanoid(),
      isHeld: false,
      clickFun: diesClick,
    };
  }

  function diesClick(clickId) {
    setDies((prevState) =>
      prevState.map((die) => {
        return die.id === clickId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function createDiesArray() {
    const dieArray = Array.apply(null, Array(10));
    return dieArray.map((die) => createDie());
  }

  function diesRoll() {
    if (tenzies) {
      setDies(createDiesArray());
      setTenzies(false);
    } else {
      setDies((prevState) =>
        prevState.map((die) => {
          return die.isHeld ? die : createDie();
        })
      );
    }
  }

  const [dies, setDies] = React.useState(createDiesArray());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allSelected = dies.every((die) => die.isHeld);
    const allAreSame = dies.every((die) => die.value === dies[0].value);
    if (allSelected && allAreSame) {
      setTenzies(true);
    }
  }, [dies]);

  return (
    <div id="mainContainer">
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p className="textArea">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dies data={dies} />
      <button id="btn" onClick={diesRoll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  );
}

export default App;
