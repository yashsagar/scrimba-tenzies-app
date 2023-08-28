import React from "react";

export default function Dies(prop) {
  const diesList = prop.data.map((die) => {
    const styles = { backgroundColor: die.isHeld ? "#59E391" : "#ffffff" };
    return (
      <div
        className="die"
        key={die.id}
        style={styles}
        onClick={() => die.clickFun(die.id)}
      >
        {die.value}
      </div>
    );
  });
  return <div id="diesContainer">{diesList}</div>;
}
