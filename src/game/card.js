export class Card {
  constructor(id, cardFront, cardBack) {
    this.id = id;
    this.cardFront = cardFront;
    this.cardBack = cardBack;
    this.cardFaceUp = false;
    this.cardMatched = false;
  }

  revealCard() {
    this.cardFaceUp = true;
  }

  hideCard() {
    this.cardFaceUp = false;
  }

  matchCard() {
    this.cardMatched = true;
  }

  resetCard() {
    this.cardFaceUp = false;
    this.cardMatched = false;
  }
}
