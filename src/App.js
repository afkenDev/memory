import React, { useState, useEffect } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const animal_imgs = [
  { src: "/img/camel.png", backgroundColor: "#ff0000", matched: false },
  { src: "/img/dog.png", backgroundColor: "#0000ff", matched: false },
  { src: "/img/fox.png", backgroundColor: "#ffff00", matched: false },
  { src: "/img/mouse.png", backgroundColor: "#ff00ff", matched: false },
  { src: "/img/penguin.png", backgroundColor: "#00ffff", matched: false },
  { src: "/img/rabbit.png", backgroundColor: "#800080", matched: false },
  { src: "/img/whale.png", backgroundColor: "#008080", matched: false },
  { src: "/img/cat.png", backgroundColor: "#00ff00", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);

  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);

  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  //mischen
  const mischen = () => {
    const gemischt = [...animal_imgs, ...animal_imgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));


    setChoiceOne(null)
    setCards(gemischt);
    setTurns(0);
  };


  //Handle Choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //vergleichen
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) return { ...card, matched: true };
            else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //neuer turn
  const resetTurn = () => {
    setChoiceOne = null;
    setChoiceTwo = null;
    setTurns((prevTurns) => prevTurns++);
    setDisabled(false);
  };

  //Ladestart
  useEffect(() => {
    mischen();
  },[])

  return (
    <div className="App">
      <h1>MEGA CUTIE ANIMAL MEMORY</h1>
      <button onClick={mischen}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={true}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
