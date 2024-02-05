const btnRollDiceRefs = document.querySelector('.btn--roll');
const diceImageRefs = document.querySelector('.dice');

let countPlayer = 0;
let currentPlayerOneValue = 0;

btnRollDiceRefs.addEventListener('click', onBtnRollDiceClick);

function onBtnRollDiceClick() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceMarkup(randomNumber);
  checkRandomNumber(randomNumber);
  // currentPlayerValue += randomNumber;
  // document.querySelector(`#current--${countPlayer}`).textContent =
  //   currentPlayerValue;
}

function diceMarkup(number) {
  diceImageRefs.textContent = number;
  diceImageRefs.classList.remove('hidden');
}

function checkRandomNumber(number) {
  if (number === 1) {
    countPlayer = 1;
  }
  currentPlayerValue += number;
  document.querySelector(`#current--${countPlayer}`).textContent =
    currentPlayerValue;
}
