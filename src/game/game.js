// import { Deck } from "./deck";
import { Card } from "./card";

export class Game {
  constructor() {
    this.selectedCardArray = [];
    this.checkingCards = false;
    this.win = false;
  }

  selectCards(card) {
    if (this.checkingCards) return;
    if (
      this.selectedCardArray.length < 2 &&
      !card.cardFaceUp &&
      !card.cardMatched
    ) {
      card.revealCard();
      this.selectedCardArray.push(card);
    }
    console.log(this.selectedCardArray);

    if (this.selectedCardArray.length === 2) {
      this.checkingCards = true;
      setTimeout(() => {
        this.compareCards();
      }, 1000);
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
    }
    this.selectedCardArray = [];
    this.checkingCards = false;
  }
}
