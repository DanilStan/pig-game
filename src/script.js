const btnRollDiceRefs = document.querySelector('.btn--roll');
const diceImageRefs = document.querySelector('.dice');
const holdBtnRefs = document.querySelector('.btn--hold');

let countPlayer = 0;
let currentPlayerOneValue = 0;
let totalValuePlayerOne = 0;
let totalValuePlayerTwo = 0;

btnRollDiceRefs.addEventListener('click', onBtnRollDiceClick);
holdBtnRefs.addEventListener('click', onBtnHoldClick);

function onBtnRollDiceClick() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceMarkup(randomNumber);
  checkRandomNumber(randomNumber);
}

function onBtnHoldClick() {
  if (countPlayer === 0) {
    totalValuePlayerOne += currentPlayerOneValue;
    document.querySelector(`#score--0`).textContent = totalValuePlayerOne;
  } else {
    totalValuePlayerTwo += currentPlayerOneValue;
    document.querySelector(`#score--1`).textContent = totalValuePlayerTwo;
  }

  document.querySelector(`#current--${countPlayer}`).textContent = 0;
  countPlayer === 1 ? (countPlayer = 0) : (countPlayer = 1);
  currentPlayerOneValue = 0;
}

function checkRandomNumber(number) {
  if (number === 1) {
    document.querySelector(`#current--${countPlayer}`).textContent = 0;
    countPlayer === 1 ? (countPlayer = 0) : (countPlayer = 1);
    currentPlayerOneValue = number - 1;
  }
  currentPlayerOneValue += number;
  document.querySelector(`#current--${countPlayer}`).textContent =
    currentPlayerOneValue;
}

function diceMarkup(number) {
  diceImageRefs.textContent = number;
  diceImageRefs.classList.remove('hidden');
}
