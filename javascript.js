var theNumber = Math.floor(Math.random()*100)+1;
var guessButton = document.querySelector("#guess-btn");
var clearButton = document.querySelector(".clear-btn");
var resetButton = document.querySelector(".reset-btn");

function mainFunc(theNumber){
  if(inputCheck()) {
    compareGuess();
    guessDisplay();
  } else {
    badInputDisplay();
  }
};

function compareGuess() {
  var input = getGuess();
  if(input === theNumber)
    correctNum();
  else
    input > theNumber ? tooHigh() : tooLow();
};

function clearGuess() {
  return document.getElementById("inputbox").value = "";
};

function resetGame() {
  location.reload();
}

function getGuess(){
  return Number(document.getElementById("inputbox").value);
}

function tooHigh() {
  return document.querySelector("#textResult").innerText = "That is too high";
};

function tooLow() {
  return document.querySelector("#textResult").innerText = "That is too low"
}

function correctNum() {
  return document.querySelector("#textResult").innerText = "That is correct!"
};

function guessDisplay() {
  document.querySelector("h2").innerText = getGuess();
};

function badInputDisplay() {
  document.querySelector("h2").innerText = "";

  document.querySelector("#textResult").innerText = "NOT a number between 1-100."
};

function addResultSection() {
  document.getElementById("result").style.display = "block"
};

function inputCheck() {
  var input = getGuess();
  typeof input !== "number" || (input>0 && input<101);
}
              // Buttons
// <------------------------------------->

guessButton.addEventListener("click", function() {
  addResultSection();
  mainFunc(theNumber);
});

clearButton.addEventListener("click", function() {
  clearGuess();
});

resetButton.addEventListener("click", function() {
  resetGame();
});
