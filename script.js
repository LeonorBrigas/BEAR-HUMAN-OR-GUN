var result = document.getElementById("result");
var userChoice = document.getElementById("user");
var computerChoice = document.getElementById("computer");

function getUserInput(userInput) {
  var userInput = userInput.toLowerCase();
  if (userInput === "bear" || userInput === "gun" || userInput === "human") {
    return userInput;
  } else {
    userInput = "Invalid choice. Please refresh and play again"
  }
}

function getComputerInput() {
  var computerInput = Math.floor(Math.random()*3);
  if (computerInput === 0) {
    return "bear";
  } else if (computerInput === 1) {
    return "human";
  } else {
    return "gun";
  }
}

// options for result
// It's a Tie
// You killed a human (bear vs human) & opposite
// You have been shot by a gun (bear vs gun) & opposite
// You have disarmed a gun (human vs gun) & opposite
function theWinner(userInput, computerInput) {
  if (userInput === "Invalid choice. Please refresh and play again") {
    return "You entered a wrong option!";
  }
  if (userInput === computerInput) {
    return "It's a Tie";
  }
  if (userInput === "bear") {
    if (computerInput === "human") {
      return "You killed a human";
    } else {
      return "You have been shot by a gun";
    }
  }

  if (userInput === "human") {
    if (computerInput === "gun" ) {
      return "You have disarmed a gun";
    } else {
      return "You have been killed by a bear";
    }
  }

  if (userInput === "gun") {
    if (computerInput === "bear") {
      return "You shot a bear";
    } else {
      return "Your gun was disarmed";
    }
  }
}

function playGame() {
  var promptUserInput = prompt("Please choose bear, human or gun. Note bear can kill a human, human can disarm a gun and a gun can shot a bear!");
  var userInput = getUserInput(promptUserInput);
  userChoice.innerHTML = "<p>Your choice was: <b>" + userInput.toUpperCase() + "</b></p>"
  var computerInput = getComputerInput();
  computerChoice.innerHTML = "<p>Computer choice was: <b>" + computerInput.toUpperCase() + "</b></p>"
  var theWinnerIs = theWinner(userInput, computerInput);
  result.innerHTML = theWinnerIs;
}

playGame();
