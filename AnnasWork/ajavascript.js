var enterField = document.querySelector("#inputbox");
var guessButton = document.querySelector("#guess-btn");
var textResult = document.querySelector("#textResult");
var clearButton = document.querySelector("#clear-btn");
var resetButton = document.querySelector("#reset-btn");
var theNumber = resetNum();
var guessDisplay = document.querySelector('h2');

guessButton.addEventListener('click', function () {
  guessDisplay.innerText = enterField.value;
  console.log(enterField.value);
  resultMsg();
});

clearButton.addEventListener('click', function () {
  enterField.value = '';
  guessDisplay.innerText = '';
  textResult.innerText = '';
  console.log(enterField.value);
})

resetButton.addEventListener('click', function () {
  enterField.value = '';
  guessDisplay.innerText = '';
  textResult.innerText='';
  theNumber = resetNum();
  console.log(enterField.value);
})

function resultMsg() {
if (theNumber === parseInt(enterField.value)) {
  document.querySelector("#textResult").innerText='Hooray! You guessed it!';
} else if (theNumber > parseInt(enterField.value)) {
  document.querySelector("#textResult").innerText='That is too low.';
} else if (theNumber < parseInt(enterField.value)){
  document.querySelector("#textResult").innerText='That is too high.';
} else if (parseInt(enterField.value) !== ) {

}
}

function resetNum() {
  return Math.floor(Math.random () * 100 + 1);
}
