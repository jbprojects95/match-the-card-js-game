import "./styles/template-styles.css";

import { navigate } from "./router";

import { Deck } from "./game/deck";

import { Game } from "./game/game";

import cardBackSvg from "./assets/cards/cardBack/dish.svg?raw";

/* 
EXAMPLE IMG IMPORT:

import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);

*/

const mobileNavBtn = document.querySelector(".hamburger-menu-btn");
const mobileCloseBtn = document.querySelector(".close-menu-btn");
const mobileBreakpoint = window.matchMedia("(max-width: 690px)");
const nav = document.querySelector(".navbar-items");

mobileBreakpoint.addEventListener("change", (e) => {
  if (!e.matches) {
    /*this is to stop the mobile menu flickering on open and page resize.*/
    nav.classList.remove("is-open", "nav-open", "nav-close");
  }
});

const menuOpen = () => {
  nav.classList.remove("nav-close");
  nav.classList.add("nav-open", "is-open");
};

const menuClose = () => {
  nav.classList.remove("nav-open", "is-open");
  nav.classList.add("nav-close");
};

mobileNavBtn.addEventListener("click", menuOpen);
mobileCloseBtn.addEventListener("click", menuClose);

function setActive(navbarItem) {
  document
    .querySelectorAll("[data-route]")
    .forEach((item) => item.classList.remove("active"));

  navbarItem.classList.add("active");
}

document.addEventListener("click", (e) => {
  const logoLink = document.getElementById("logo-link");
  const link = e.target.closest("[data-route]");
  if (!link) return;

  e.preventDefault();
  if (link != logoLink) {
    navigate(link.dataset.route);
  }
  if (link === logoLink) {
    return;
  } else {
    setActive(link);
  }
});

// ----------[COLOUR THEME CODE]----------

const colourHex = document.querySelector("#base-colour-input");
function setColour() {
  const lightness = getLightnessFromHex(colourHex.value);
  document.body.setAttribute(
    "style",
    `--base-clr: ${colourHex.value};
    --text-clr: ${lightness > 65 ? "black" : "white"}`,
  );
}

colourHex.addEventListener("input", setColour);

function getLightnessFromHex(hex) {
  hex = hex.replace(/^#/, "");

  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  return +(brightness * 100).toFixed(2);
}

// ----------[CARD-GENERATOR-CODE]----------

const deck1 = new Deck();
const game = new Game();
deck1.buildDeck();

const createCards = () => {
  const gameRoot = document.getElementById("game-root");
  if (!gameRoot) return;

  gameRoot.innerHTML = "";
  const gameGrid = document.createElement("div");
  gameGrid.classList.add("grid-container");

  const deck = deck1.deck;
  for (const card of deck) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("grid-cell");
    // const cardBack = document.createElement("svg");

    /* commenting for my own sanity - this sets the img src to card.cardBack, 
    then appends said front to the cardDiv (grid-cell) then appends that to mainContent, then appends mainContent to main. */
    // cardBack.src = card.cardBack;
    // cardBack.classList.add("card-back");
    // cardDiv.appendChild(cardBack);

    cardDiv.innerHTML = cardBackSvg;
    gameGrid.appendChild(cardDiv);

    cardDiv.addEventListener("click", () => {
      cardDiv.innerHTML = card.id;
      game.selectCards(card);
    });
  }

  gameRoot.appendChild(gameGrid);
};

createCards();

// TODO: find a way to make the CSS invert on the cardBack change dynamically like text colour does.
