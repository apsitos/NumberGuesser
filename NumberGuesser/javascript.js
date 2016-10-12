var startButton = document.querySelector("#start-btn");
var guessButton = document.querySelector("#guess-btn");
var clearButton = document.querySelector("#clear-btn");
var resetButton = document.querySelector(".reset-btn");
var inputField = document.getElementById("inputbox");
var inputFieldMin = document.getElementById("inputboxMin");
var inputFieldMax = document.getElementById("inputboxMax");
var theGuess;


startButton.addEventListener("click", function() {
  checkMinMax();
});

guessButton.addEventListener("click", function() {
  document.querySelector("#resultMsg").innerText = "Your last guess was";
  mainFunc();
  disableClearBtn();
});

clearButton.addEventListener("click", function() {
  clearGuess();
  disableClearBtn();
});

resetButton.addEventListener("click", function() {
  resetGame();
});


inputField.addEventListener("keyup", function() {
  if(inputField.value === ""){
      clearButton.disabled = true;
    } else {
      clearButton.disabled = false;
    };
});

function disableClearBtn(){
  if(inputField.value === ""){
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  };
}

function mainFunc(){
  if(inputCheck()) {
    compareGuess();
    guessDisplay();
  } else {
    badInputDisplay();
  }
};

function compareGuess() {
  var input = getGuess();
  if(input === theGuess){
    correctNum();
  }
  else
    input > theGuess ? tooHigh() : tooLow();
};

function randoNum() {
  return Math.floor(Math.random()*(getMax()-getMin())+getMin());
}

function clearGuess() {
  return document.getElementById("inputbox").value = "";
};

function resetGame() {
  location.reload();
}

function getGuess(){
  return Number(document.getElementById("inputbox").value);
}

function getMin() {
  return Number(document.getElementById("inputboxMin").value);
}

function getMax() {
  return Number(document.getElementById("inputboxMax").value);
}

function tooHigh() {
  return document.querySelector("#textResult").innerText = "That is too high";
};

function tooLow() {
  return document.querySelector("#textResult").innerText = "That is too low"
}

function correctNum() {
  var newMin  = getMin() - 10;
  var newMax = getMax() + 10;
  document.getElementById("inputboxMin").value = newMin;
  document.getElementById("inputboxMax").value = newMax;
  guessButton.style.display = "none";
  startButton.style.display = "inline-block";

  return document.querySelector("#textResult").innerText = "That is correct! Try to guess the number between the new range!";
};

function guessDisplay() {
  document.querySelector("h2").innerText = getGuess();
};

function badInputDisplay() {
  document.querySelector("h2").innerText = "";
  document.querySelector("#textResult").innerText = "NOT a number between " + getMin() + "-" + getMax() + "."
};

function badMinMaxDisplay() {
  document.getElementById("errorMinMaxMsg").style.display = "block";
}

function addResultSection() {
  document.getElementById("result").style.display = "block";
  document.getElementById("clear-btn").style.display = "inline-block";
  document.getElementById("errorMinMaxMsg").style.display = "none";
};

function checkMinMax() {
  if(getMin() !== "" && getMax() !== "" && getMin()<getMax()) {
    guessButton.style.display = "inline-block";
    startButton.style.display = "none";
    errorMinMaxMsg.style.display = "none";
    inputboxMin.disabled = true;
    inputboxMax.disabled = true;
    inputbox.disabled = false;
    addResultSection();
    return theGuess = randoNum();
  } else {
    badMinMaxDisplay();
  }
};

function inputCheck() {
  var input = getGuess();
  return (input>getMin()-1 && input<getMax()+1);
};
