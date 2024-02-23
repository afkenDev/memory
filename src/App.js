import React, { useState, useEffect } from 'react';
import './App.css';

const imgs = [
  "public/img/camel.png",
  "public/img/cat.png",
  "public/img/dog.png",
  "public/img/dogger.png",
  "public/img/mouse.png",
  "public/img/penguin.png",
  "public/img/rabbit.png",
  "public/img/whale.png",
];

const Card = ({ imgSrc, isFlipped, onClick }) => (
  <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
    <img src={isFlipped ? imgSrc : 'public/img/cover.png'} alt="Cover" />
  </div>
);

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  useEffect(() => {
    const initializeGame = () => {
      const shuffledImgs = imgs.concat(imgs).sort(() => 0.5 - Math.random());
      setCards(shuffledImgs.map((src, index) => ({ src, index, isFlipped: false })));
    };

    initializeGame();
  }, []);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index)) return;

    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedIndices((prevFlipped) => [...prevFlipped, index]);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      const [firstCard, secondCard] = cards.slice(firstIndex, secondIndex + 1);

      if (firstCard.src === secondCard.src) {
        setMatchedIndices((prevMatched) => [...prevMatched, firstIndex, secondIndex]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              flippedIndices.includes(i) ? { ...card, isFlipped: false } : card
            )
          );
        }, 1000);
      }
      setFlippedIndices([]);
    }
  }, [flippedIndices, cards]);

  return (
    <div className="memory-game">
      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.src}
            isFlipped={card.isFlipped || matchedIndices.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MemoryGame />
    </div>
  );
}

export default App;
