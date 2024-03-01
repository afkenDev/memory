import React, { useState, useEffect } from 'react';
import './App.css';

const animal_imgs = [
  {"src": "public/img/camel.png", "backgroundColor": "#ff0000"},
  {"src": "public/img/cat.png", "backgroundColor": "#00ff00"},
  {"src": "public/img/dog.png", "backgroundColor": "#0000ff"},
  {"src": "public/img/dogger.png", "backgroundColor": "#ffff00"},
  {"src": "public/img/mouse.png", "backgroundColor": "#ff00ff"},
  {"src": "public/img/penguin.png", "backgroundColor": "#00ffff"},
  {"src": "public/img/rabbit.png", "backgroundColor": "#800080"},
  {"src": "public/img/whale.png", "backgroundColor": "#008080"}
];


function App() {

  const [cards, setCards] = useState([])

  const [turns, setTurns] = useState([])

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
          <div className="card"key={card.id}>
            <div>
              <img className='front' src={card.src} alt='card front' />
              <img className='back' src='/img/cover.png' alt="card back"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App