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
    displayOnBtnHold(totalValuePlayerOne, 0, 1);
  } else {
    totalValuePlayerTwo += currentPlayerOneValue;
    displayOnBtnHold(totalValuePlayerTwo, 1, 0);
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
  classRemoveStyle('.player--0', 'player--winner');
  classRemoveStyle('.player--1', 'player--winner');
  classRemoveStyle('.player--1', 'player--active');
  classAddStyle('.player--0', 'player--active');
  onDisabledBtn(false, 'block');
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

function displayOnBtnHold(totalValue, currentPlayerNumber, resetValue) {
  console.log(totalValuePlayerOne);
  document.querySelector(`#score--${currentPlayerNumber}`).textContent =
    totalValue;
  resetCurrentValue(`#current--${currentPlayerNumber}`, resetValue);
  styleCheck();
  finalGame();
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
  countPlayer === 0
    ? toggleClass('.player--0', '.player--1', 'player--active')
    : toggleClass('.player--1', '.player--0', 'player--active');
}

function finalGame() {
  if (totalValuePlayerOne >= 100) {
    classAddStyle('.player--0', 'player--winner');
    onDisabledBtn(true, 'none');
  }

  if (totalValuePlayerTwo >= 100) {
    classAddStyle('.player--1', 'player--winner');
    onDisabledBtn(true, 'none');
  }
}

function classAddStyle(namePlayer, nameClass) {
  document.querySelector(namePlayer).classList.add(nameClass);
}

function classRemoveStyle(namePlayer, nameClass) {
  document.querySelector(namePlayer).classList.remove(nameClass);
}

function onDisabledBtn(btnStatus, diceStyle) {
  holdBtnRefs.disabled = btnStatus;
  btnRollDiceRefs.disabled = btnStatus;
  diceImageRefs.style.display = diceStyle;
}

function toggleClass(nameClassAdd, nameClassRemove, nameClass) {
  document.querySelector(nameClassAdd).classList.add(nameClass);
  document.querySelector(nameClassRemove).classList.remove(nameClass);
}
