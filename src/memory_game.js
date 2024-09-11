const symbols = ["🍎", "🍌", "🍇", "🍒", "🍍", "🍉", "🍓", "🍑"];

let winPopupMessage,
  container,
  gameBoard,
  startButton,
  restartButton,
  createBoard;

const domElements = (document) => {
  winPopupMessage = document.querySelector(".win-popup-message");
  container = document.querySelector(".container");
  gameBoard = document.querySelector("#game-board");
  startButton = document.querySelector("#start-button");
  restartButton = document.querySelector("#restart-button");
  playAgainButton = document.querySelector("#play-again-button");
};

function setStartButtonClickEvent() {
  startButton.addEventListener("click", () => {
    enableCards();
    const startGameMessage = document.querySelector(".start-game-message");
    startGameMessage.style.display = "none";
    container.classList.add("fully-bright-container");
  });
}

const setupDom = (document) => {
  restartButton.addEventListener("click", () => {
    startGame();
  });

  playAgainButton.addEventListener("click", () => {
    startGame();
    winPopupMessage.style.display = "none";
    container.classList.add("fully-bright-container");
    restartButton.style.display = "block";
  });

  createBoard = () => {
    if (!gameBoard) return;
    const cardSymbols = shuffle([...symbols, ...symbols]);
    cardSymbols.forEach((symbol) => {
      const newCard = document.createElement("div");
      newCard.classList.add("hidden", "card");
      newCard.dataset.symbol = symbol;
      newCard.addEventListener("click", () => {
        flipCard(newCard);
        displayRestartButton();
      });
      gameBoard.appendChild(newCard);
      cards.push(newCard);
    });
  };
};

let cards = [];
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function disableCards() {
  cards.forEach((card) => {
    card.classList.add("disabled");
  });
}

function enableCards() {
  cards.forEach((card) => {
    card.classList.remove("disabled");
  });
}

function flipCard(card) {
  if (card.classList.contains("matched") || card === firstCard || secondCard) {
    return;
  }
  card.classList.remove("hidden");
  card.textContent = card.dataset.symbol;

  if (!firstCard) {
    firstCard = card;
  } else if (!secondCard) {
    secondCard = card;
    checkMatch(firstCard, secondCard);
  }
}

function displayRestartButton() {
  if (restartButton.style.display !== "block") {
    restartButton.style.display = "block";
  }
}

function checkMatch(card1, card2) {
  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedPairs += 1;
    displayWinMessage(matchedPairs, symbols);
    resetFlippedCards();
  } else {
    setTimeout(() => {
      card1.classList.add("hidden");
      card2.classList.add("hidden");
      card1.textContent = "";
      card2.textContent = "";
      resetFlippedCards();
    }, 1000);
  }
}

function displayWinMessage(matched, allSymbols) {
  if (matched === allSymbols.length) {
    setTimeout(() => {
      restartButton.style.display = "none";
      winPopupMessage.style.display = "block";
      container.classList.remove("fully-bright-container");
    }, 500);
  }
}

function resetFlippedCards() {
  firstCard = null;
  secondCard = null;
}

function startGame() {
  gameBoard.innerHTML = "";
  matchedPairs = 0;
  firstCard = null;
  secondCard = null;
  cards = [];
  createBoard();
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    setupDom(document);
    createBoard();
    disableCards();
  });
}

module.exports = {
  setupDom,
  checkMatch,
  startGame,
  displayWinMessage,
};
