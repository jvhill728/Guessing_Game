/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

// Create a function that generates the winning number, [1-100]. winner will
// be the variable the winning number is stored in.

function generateWinningNumber() {
  let winningNumber = Math.floor(Math.random() * 100) + 1;
  return winningNumber;
}

console.log(generateWinningNumber());

// Function to shuffle, not sure what for yet, will ask in class.
function shuffle(array) {
  var m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Create a new function that will hold new game data and code.

function game() {
  this.playerGuess = null;
  this.pastGuesses = [];
  this.winningNumber = generateWinningNumber();
}

function newGame() {
  return new game();
}

// Creating a difference function that will return absolute difference between playerGuess and
// winning Number

function AbsDifference() {
  return Math.abs(this.playerGuess - this.winningNumber);
}
// returns true if the playersGuess is lower than winningNumber, and false if not.
function isLower() {
  if(this.playerGuess < this.winningNumber) {
    return true;
  } else {
    return false;
  }
}


// takes a number as an argument and sets that as playersGuess
function playerGuessSubmission(num) {
  if(num > 100 || num < 1 || isNaN(num)) {
    document.getElementById("userMsg").innerHTML = "I said between 1 - 100! Come on...";
    throw "That is an invalid guess";
  }
}

//The last spec specifies that playersGuessSubmission should call checkGuess
// This will determine the message the user receives based on the number guessed
function checkGuess() {
  let resultMsg = playerGuessSubmission();

  if(parseInt(this.playerGuess) === this.winningNumber) {
    resultMsg = "Winner Winner, Chicken Dinner!";
    document.getElementById("submit").disabled = true;
  }
}


