const INITIAL_SCORE = 20;
const MAX_NUMBER = 20;

let number, score, highscore;

initData();

function initData() {
  score = INITIAL_SCORE;
  highscore = 0;
  number = Math.trunc(Math.random() * MAX_NUMBER) + 1;
}
/* seleccionar todos los elementos del DOM que necesitamos */
const messageField = document.querySelector(".message");
const scoreField = document.querySelector(".score");
const highscoreField = document.querySelector(".highscore");
const numberField = document.querySelector(".number");
const guessField = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

checkBtn.addEventListener("click", checkNumber);

function checkNumber() {
  const guess = Number(guessField.value);

  if (!guess || guess < 1 || guess > 20) {
    messageField.textContent = "⛔️ Enter a number between 1 and 20!";
  } else if (guess === number) {
    displaymessage("🎉 Correct Number!")
    numberField.textContent = number
    document.body.style.backgroundColor = "#60b347"
    numberField.style.backgroundColor = "#fff"
    numberField.style.border = "3px solid black"
    checkBtn.disabled = true
  } else {
    if (score > 1) {
      const message = guess > number ? "📈 Too high!" : "📉 Too low!"
      displaymessage(message)
    } else {
      displaymessage("💥 You lost the game!")
      checkBtn.disabled = true
    }
    score--
    scoreField.textContent = score
  }
}

function displaymessage(message) {
  messageField.textContent = message;
}

//funcion para que al darle al enter se envie el numero ingresado por el jugador
guessField.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    checkNumber();
  }
});

againBtn.addEventListener("click", function () {
  initData();
  scoreField.textContent = score;
  numberField.textContent = "?";
  guessField.value = "";
  messageField.textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222"
  numberField.style.backgroundColor = "#222"
  numberField.style.border = "none"
  checkBtn.disabled = false
})
