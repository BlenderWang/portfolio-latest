import React, { useState } from "react"
import Card from "./Card"
import data from "./data"

const Slideshow = () => {
  const cards = data.cards
  const [card, setCard] = useState(data.cards[0])

  const handleNext = () => {
    const newCard = card.id + 1
    setCard(cards[newCard])
  }

  const handlePrev = () => {
    const newCard = card.id - 1
    setCard(cards[newCard])
  }

  return (
    <section className="slideshow">
      <div className="col">
        <section className={`cards-slider active-slide-${card.id}`}>
          <div
            className="slides-wrapper"
            style={{
              transform: `translateX(-${card.id * 100}%)`,
            }}
          >
            {cards.map(card => (
              <Card key={card.count} card={card} />
            ))}
          </div>
        </section>
      </div>

      <div className="buttons slideshow-controller">
        <button onClick={handlePrev} disabled={card.id === 0}>
          &#8592; <span>Previous</span>
        </button>
        <button onClick={handleNext} disabled={card.id === cards.length - 1}>
          <span>Next</span> &#8594;
        </button>
      </div>
    </section>
  )
}

export default Slideshow
