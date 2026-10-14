let humanScore = 0;
let computerScore = 0;

function computerWin () {
  computerScore++;
  return("computer wins");
}

function humanWin () {
  humanScore++;
  return("human wins");
}

function noWin () {
  return("no one win");
}

/*
1: rock;
2: paper;
3: scissors;
*/

function playRound (humanChoice, computerChoice, humanWin, computerWin, noWin) {
  if (humanChoice === computerChoice) {
    return noWin();
  }
  else if (humanChoice > computerChoice) {
    if (humanChoice > computerChoice + 1) {
      return computerWin();
    }
    else {
      return humanWin();
    }
  }
  else {
    if (humanChoice < computerChoice - 1) {
      return humanWin();
    }
    else {
      return computerWin();
    }
  }
}

let humanChoice = 0;
let computerChoice = 0;

function getComputerChoice () {
  computerChoice = Math.ceil(Math.random() * 3);
}

function justify () {
  if (humanScore > computerScore) {
    return("Human wins at last!");
  }
  else if (humanScore < computerScore) {
    return("Computer wins at last!");
  }
  else {
    return("No one wins at last!");
  }
}

humanScoreSpan = document.getElementById("humanScore");
computerScoreSpan = document.getElementById("computerScore");
statusText = document.getElementById("status");

function fresh() {
  res = playRound(humanChoice, computerChoice, humanWin, computerWin, noWin);
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
  statusText.textContent = res;
}

rock = document.getElementById("rock");
scissors = document.getElementById("scissors");
paper = document.getElementById("paper");

rock.addEventListener("click", () => {
  humanChoice = 1;
  getComputerChoice();
  fresh();
})

scissors.addEventListener("click", () => {
  humanChoice = 3;
  getComputerChoice();
  fresh();
})

paper.addEventListener("click", () => {
  humanChoice = 2;
  getComputerChoice();
  fresh();
})