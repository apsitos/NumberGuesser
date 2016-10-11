var theNumber = Math.floor(Math.random()*100)+1;
var guessButton = document.querySelector('#guess-btn');
var clearButton = document.querySelector('.clear-btn');
var resetButton = document.querySelector('.reset-btn');


function compare() {
  var input = getInput();
  if (theNumber === input){
    correctNum()
  }
  else {
    badInputDisplay()
  }
};

function getInput() {
  return parseInt(document.getElementById("inputbox").value, 10);
};

function correctNum () {
  return document.querySelector("#textResult").innerText="Hooray! You guessed it!"
};

function badInputDisplay () {
  return
  }
}
