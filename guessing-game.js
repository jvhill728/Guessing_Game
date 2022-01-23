/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
function generateWinningNumber() {
  let winner = Math.floor(Math.random() * 100) + 1;
  console.log(winner);
  return winner;
}


// Function to shuffle, not sure what for yet, will ask in class.
function shuffle(array) {
 for(i = array.length - 1; i > 0; i--) {
   let randomIdx = Math.floor(Math.random() * (i + 1));
   let tempIdx = array[i];
   array[i] = array[randomIdx];
   array[randomIdx] = tempIdx;
 }
 return array;
}

// Create a new function that will hold new game data and code.
class Game {
  constructor() {
    this.playerGuess = null;
    this.pastGuesses = [];
    this.winner = generateWinningNumber();
  }

  // Creating a difference function that will return absolute difference between playerGuess and
  // winning Number

   AbsDifference() {
    return Math.abs(this.playerGuess - this.winner);
  }

  // returns true if the playersGuess is lower than winningNumber, and false if not.
   isLower() {
    if(this.playerGuess < this.winner) {
      return true;
    } else {
      return false;
    }
  }

  // takes a number as an argument and sets that as playersGuess
    playerGuessSubmission(num) {
    if(num > 100 || num < 1 || isNaN(num)) {
      document.getElementById("userMsg").innerHTML = "I said between 1 - 100! Come on...";
      throw "That is an invalid guess";
    } else {
      this.playerGuess = num;
    }
    return this.checkGuess();
  }

  //The last spec specifies that playersGuessSubmission should call checkGuess
  // This will determine the message the user receives based on the number guessed
    checkGuess() {
    
    let resultMsg = "";
    
    if (parseInt(this.playerGuess) == this.winner) {
      resultMsg = "Winner Winner, Chicken Dinner!";
    }
    else {
      this.pastGuesses.push(this.playerGuess);
      if(this.pastGuesses.length === 5) {
        resultMsg = `Nice try. The answer was ${this.winner}`;
      } else {
        let numGap = this.AbsDifference();
        if(numGap < 10) {
        resultMsg = "Your guess, so hot right now!";
      }
      else if (numGap < 25) {
        resultMsg = "Someone turn on the AC, it's getting hot in here!";
      }
      else if (numGap < 50) {
        resultMsg = "Gonna go get my parka, getting getting cold in here.";
      }
      else {
        resultMsg = "Frozen like Walt Disney.";
      }
    }
  }    
  document.getElementById("userMsg").innerHTML = resultMsg;
  document.querySelector(`#guess-list li:nth-child(${this.pastGuesses.length})`).innerHTML = this.playerGuess;
}
}


function newGame() {
  return new Game();
}

// playGame function adds event listeners and gathers the input data from the user
function playGame() {
  const game = newGame();
  const submitBtn = document.getElementById("submit");
  const numEnter = document.getElementById("player-input");

  submitBtn.addEventListener("click", function(){
    const playerGuess = document.getElementById("player-input").value;
    game.playerGuessSubmission(playerGuess);
  });
}

// Reset game function will reload window and clear any data from previous game
const resetBtn = document.getElementById("reset");
function resetGame() {
  window.location.reload(); 
}
resetBtn.addEventListener("click", resetGame);

playGame();