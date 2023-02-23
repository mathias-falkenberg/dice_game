import React, { useState } from 'react';
import Die from '../Die';

function Game() {
  const [dice, setDice] = useState([
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
  ]);
  const [bankedScore, setBankedScore] = useState(0);

  const rollDice = () => {
    let newDice = [...dice];
    for (let i = 0; i < 6; i++) {
      newDice[i] = { value: Math.floor(Math.random() * 6) + 1 };
    }
    setDice(newDice);
  };

  const bankPoints = () => {
    let ones = 0;
    let fives = 0;
    let newDice = [...dice];
    for (let i = 0; i < 6; i++) {
      if (newDice[i].value === 1) {
        ones++;
        newDice[i].value = 0;
      } else if (newDice[i].value === 5) {
        fives++;
        newDice[i].value = 0;
      }
    }
    setDice(newDice);
    setBankedScore(bankedScore + ones * 50 + fives * 100);
  };

  return (
    <div>
      <h1 className="gameh1">BANKED</h1>
      <h1 className="gameh1">{bankedScore}</h1>
      <div className="dice-container">
        {dice.map((die, index) => (
          <Die key={index} value={die.value} onClick={() => setDice(prevDice => {
            let newDice = [...prevDice];
            if (newDice[index].value === 0) {
              newDice[index] = { value: Math.floor(Math.random() * 6) + 1 };
            }
            return newDice;
          })} />
        ))}
      </div>
      <div className="buttons1">
        <button className="rollBtn" onClick={rollDice}>
          Roll Dice
        </button>
        <button className="bankBtn" onClick={bankPoints}>
          Bank Points
        </button>
      </div>
    </div>
  );
}

export default Game;
