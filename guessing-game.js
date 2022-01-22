/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

// Create a function that generates the winning number, [1-100]. winner will
    // be the variable the winning number is stored in.

function generateWinningNumber () {
    let winner = Math.floor(Math.random() * 100) + 1;
    return winner;
}

console.log(generateWinningNumber());
 
// Function to shuffle, not sure what for yet, will ask in class.
function shuffle(array) {
    var m = array.length, t, i;
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

const submitBtn = document.getElementById("submit");
let playerGuess = document.getElementById("player-input").value;
let pastGuesses = [];
let winningNumber = winner; 
    
