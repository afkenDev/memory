import React, { useState, useEffect} from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const animal_imgs = [
  {"src": "/img/camel.png", "backgroundColor": "#ff0000"},
  {"src": "/img/dog.png", "backgroundColor": "#0000ff"},
  {"src": "/img/fox.png", "backgroundColor": "#ffff00"},
  {"src": "/img/mouse.png", "backgroundColor": "#ff00ff"},
  {"src": "/img/penguin.png", "backgroundColor": "#00ffff"},
  {"src": "/img/rabbit.png", "backgroundColor": "#800080"},
  {"src": "/img/whale.png", "backgroundColor": "#008080"},
  {"src": "/img/cat.png", "backgroundColor": "#00ff00"}
];


function App() {

  const [cards, setCards] = useState([])

  const [turns, setTurns] = useState(0)

  const [choiceOne, setChoiceOne] = useState(null)

  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle 
  const mischen = () => {
    const gemischt = [...animal_imgs, ...animal_imgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random()}))

      setCards(gemischt)
      setTurns(0)
  }

  return (
    <div className="App">
      <h1>MEGA CUTIE ANIMAL MEMORY</h1>
      <button onClick={mischen}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App