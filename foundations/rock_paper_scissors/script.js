let humanScore = 0;
let computerScore = 0;

function computerWin () {
  computerScore++;
  console.log("computer wins");
}

function humanWin () {
  humanScore++;
  console.log("human wins");
}

function noWin () {
  console.log("no one win");
}

function playRound (humanChoice, computerChoice, humanWin, computerWin, noWin) {
  if (humanChoice === computerChoice) {
    noWin();
  }
  else if (humanChoice > computerChoice) {
    if (humanChoice > computerChoice + 1) {
      computerWin();
    }
    else {
      humanWin();
    }
  }
  else {
    if (humanChoice < computerChoice - 1) {
      humanWin();
    }
    else {
      computerWin();
    }
  }
}
function getHumanChoice () {
  return parseInt(prompt("输入1：剪刀；2：石头；3：布"));
}

function getComputerChoice () {
  return Math.ceil(Math.random() * 3);
}

function justify () {
  if (humanScore > computerScore) {
    console.log("Human wins at last!");
  }
  else if (humanScore < computerScore) {
    console.log("Computer wins at last!");
  }
  else {
    console.log("No one wins at last!");
  }
}

function gamePlay () {
  console.log("5轮游戏开始：");
  let computerChoice = 0;
  let humanChoice = 0;

  for (let i = 1; i <= 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log("第" + i + "轮：\nHuman: " + humanChoice + "\nComputer: " + computerChoice + "\n");
    playRound(humanChoice, computerChoice, humanWin, computerWin, noWin);
    console.log("当前分数：\nHuman: " + humanScore + "\nComputer: " + computerScore + "\n");
  }
  
  justify();
}

gamePlay();