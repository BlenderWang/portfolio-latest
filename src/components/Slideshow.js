import React, { Component } from "react"
import Card from "./Card"
import data from "./data"

export default class Slideshow extends Component {
  state = {
    cards: data.cards,
    card: data.cards[0],
  }

  handleNext = () => {
    const newCard = this.state.card.id + 1
    this.setState({
      card: data.cards[newCard],
    })
  }

  handlePrev = () => {
    const newCard = this.state.card.id - 1
    this.setState({
      card: data.cards[newCard],
    })
  }

  render() {
    const { cards, card } = this.state

    return (
      <div className="slideshow">
        <div className="col">
          <div className={`cards-slider active-slide-${card.id}`}>
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
          </div>
        </div>

        <div className="buttons">
          <button onClick={() => this.handlePrev()} disabled={card.id === 0}>
            &#8592;
          </button>
          <button
            onClick={() => this.handleNext()}
            disabled={card.id === data.cards.length - 1}
          >
            &#8594;
          </button>
        </div>
      </div>
    )
  }
}
