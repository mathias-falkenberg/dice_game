import React from "react"

function getDiceSymbol(value) {
  const diceSymbols = [
    '\u2680', // Dice symbol for 1
    '\u2681', // Dice symbol for 2
    '\u2682', // Dice symbol for 3
    '\u2683', // Dice symbol for 4
    '\u2684', // Dice symbol for 5
    '\u2685', // Dice symbol for 6
  ];
  return diceSymbols[value - 1];
}

export default function Die(props) {
  return (
    <div>
      <h2 className="theBigDice">{getDiceSymbol(props.value)}</h2>
    </div>
  );
}