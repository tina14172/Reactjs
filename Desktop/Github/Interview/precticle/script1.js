const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const againBtn = document.getElementById('againBtn');
const messageEl = document.getElementById('message');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('highscore');

let secretNumber = randomNumber();
let score = 20;
let highScore = 20;

function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function updateScore() {
  scoreEl.textContent = score;
}

function updateHighScore() {
  highScoreEl.textContent = highScore;
}

function setMessage(text) {
  messageEl.textContent = text;
}

function resetGame() {
  secretNumber = randomNumber();
  score = 20;
  guessInput.value = 4;
  guessInput.focus();
  setMessage('Correct Number!');
  updateScore();
}

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 20) {
    setMessage('Invalid guess!');
    return;
  }

  if (guess === secretNumber) {
    setMessage('Correct Number!');
    guessInput.value = secretNumber;

    if (score > highScore) {
      highScore = score;
      updateHighScore();
    }

    return;
  }

  if (score > 1) {
    score -= 1;
    updateScore();
  }

  if (guess < secretNumber) {
    setMessage('Too low!');
  } else {
    setMessage('Too high!');
  }

  if (score === 0) {
    setMessage('You lost!');
  }
});

againBtn.addEventListener('click', resetGame);

updateScore();
updateHighScore();
setMessage('Correct Number!');