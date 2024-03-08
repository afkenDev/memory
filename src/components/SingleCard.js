
export default function SingleCard( {card, handleChoice} ) {

    const handleClick = () => {
      handleChoice(card)
      
    }

    return (
        <div className="card">
            <div>
              <img className='front' src={card.src} alt=''/>
              <img className='back' src='/img/cover.png' onClick={handleClick} alt=''/>
            </div>
          </div>
    )
}

