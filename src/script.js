const btnRollDiceRefs = document.querySelector('.btn--roll');
const diceImageRefs = document.querySelector('.dice');
const holdBtnRefs = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

let countPlayer = 0;
let currentPlayerOneValue = 0;
let totalValuePlayerOne = 0;
let totalValuePlayerTwo = 0;

btnRollDiceRefs.addEventListener('click', onBtnRollDiceClick);
holdBtnRefs.addEventListener('click', onBtnHoldClick);
btnNewGame.addEventListener('click', onClickNewGame);

styleCheck(countPlayer);

function onBtnRollDiceClick() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceMarkup(randomNumber);
  checkRandomNumber(randomNumber);
}

function onBtnHoldClick() {
  if (countPlayer === 0) {
    totalValuePlayerOne += currentPlayerOneValue;
    document.querySelector(`#score--0`).textContent = totalValuePlayerOne;
    resetCurrentValue('#current--0', 1);
    styleCheck();
    finalGame();
  } else {
    totalValuePlayerTwo += currentPlayerOneValue;
    document.querySelector(`#score--1`).textContent = totalValuePlayerTwo;
    resetCurrentValue('#current--1', 0);
    styleCheck();
    finalGame();
  }
  currentPlayerOneValue = 0;
}

function onClickNewGame() {
  countPlayer = 0;
  currentPlayerOneValue = 0;
  totalValuePlayerOne = 0;
  totalValuePlayerTwo = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  diceImageRefs.textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  holdBtnRefs.disabled = false;
  btnRollDiceRefs.disabled = false;
  diceImageRefs.style.display = 'block';
}

function checkRandomNumber(number) {
  if (number === 1) {
    if (countPlayer === 0) {
      resetCurrentValue('#current--0', 1);
      styleCheck();
    } else {
      resetCurrentValue('#current--1', 0);
      styleCheck();
    }
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

function resetCurrentValue(className, countValue) {
  document.querySelector(className).textContent = 0;
  countPlayer = countValue;
}

function styleCheck() {
  if (countPlayer === 0) {
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  } else {
    document.querySelector(`.player--1`).classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  }
}

function finalGame() {
  if (totalValuePlayerOne >= 100) {
    finalStyle('.player--0', true, 'none');
  }

  if (totalValuePlayerTwo >= 100) {
    finalStyle('.player--1', true, 'none');
  }
}

function finalStyle(namePlayer, btnStatus, diceStyle) {
  document.querySelector(namePlayer).classList.add('player--winner');
  holdBtnRefs.disabled = btnStatus;
  btnRollDiceRefs.disabled = btnStatus;
  diceImageRefs.style.display = diceStyle;
}
