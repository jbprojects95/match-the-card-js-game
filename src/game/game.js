// import { Deck } from "./deck";
import { Card } from "./card";

export class Game {
  constructor() {
    this.selectedCardArray = [];
  }

  selectCards(card) {
    if (this.selectedCardArray.length < 2) {
      card.revealCard();
      this.selectedCardArray.push(card);
    }
    console.log(this.selectedCardArray);
    if (this.selectedCardArray.length === 2) {
      this.compareCards();
    }
  }

  compareCards() {
    if (this.selectedCardArray.length !== 2) return;

    const [firstCard, secondCard] = this.selectedCardArray;

    if (firstCard.id === secondCard.id) {
      console.log("MATCH");
      firstCard.matchCard();
      secondCard.matchCard();
    } else {
      console.log("FAIL");
      firstCard.resetCard();
      secondCard.resetCard();
      firstCard.hideCard();
      secondCard.hideCard();
    }

    this.selectedCardArray = [];
  }
}
