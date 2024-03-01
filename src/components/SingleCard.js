
export default function SingleCard( {card} ) {
    return (
        <div className="card">
            <div>
              <img className='front' src={card.src} alt=''/>
              <img className='back' src='/img/cover.png' alt=''/>
            </div>
          </div>
    )
}

