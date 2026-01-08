import { cardData } from "./config/cardConfig";
import { Card } from "./card";

export class Deck {
  constructor() {
    this.deck = [];
  }

  buildDeck() {
    for (let i = 0; i < cardData.length; i++) {
      const id = cardData[i].id;
      const cardFront = cardData[i].cardFront;
      const card = new Card(id, cardFront, "dish.svg");
      const cardPair = new Card(id, cardFront, "dish.svg");
      this.deck.push(card, cardPair);
    }
  }

  resetDeck() {
    return;
  }

  logDeck() {
    console.log(this.deck);
  }
}
