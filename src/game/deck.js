import { cardData } from "./config/cardConfig";
import { Card } from "./card";
import { cardBack } from "./config/cardConfig";

export class Deck {
  constructor() {
    this.deck = [];
  }

  buildDeck() {
    this.deck.length = 0;
    for (let i = 0; i < cardData.length; i++) {
      const id = cardData[i].id;
      const cardFront = cardData[i].cardFront;

      const card = new Card(id, cardFront, cardBack);
      const cardPair = new Card(id, cardFront, cardBack);
      this.deck.push(card, cardPair);
    }

    this.shuffleDeck();
  }

  resetDeck() {
    this.deck.length = 0;
    this.buildDeck();
  }

  logDeck() {
    console.log(this.deck);
  }

  shuffleDeck() {
    let currentIndex = this.deck.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.deck[currentIndex], this.deck[randomIndex]] = [
        this.deck[randomIndex],
        this.deck[currentIndex],
      ];
    }
  }
}
