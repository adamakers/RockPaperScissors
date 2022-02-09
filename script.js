const buttons = document.querySelectorAll('.btn');

const resultsBoardPara = document.querySelector('.game-results');
const computerScoreCountEl = document.querySelector('.computer-score-num');
const playerScoreCountEl = document.querySelector('.player-score-num');

let score = {0:0, 1:0};// 0 is computer 1 is user

// generate a random number between 1 and 3 and returns choice
function randomSelection() {
  const randomVal = Math.floor(Math.random() * (4 - 1) + 1);
  switch (randomVal) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

//Plays round and determines winner
function playRound(userSelection, computerSelection) {
  // console.log('########################################################')
  // console.log(`User chose: ${userSelection} |||| Computer chose: ${computerSelection}`);
  
  const gameOutcome = {
    userSelection: userSelection,
    computerSelection: computerSelection
  };


  if (userSelection === computerSelection) {
    gameOutcome.result = -1;
  }

  // 0 if computer wins 1 if user wins
  if  (userSelection === 'rock' && computerSelection === 'paper') {
    gameOutcome.result = 0;
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    gameOutcome.result = 1;
  } else if (userSelection === 'paper' && computerSelection === 'scissors') {
    gameOutcome.result = 0;
  } else if (userSelection === 'paper' && computerSelection === 'rock') {
    gameOutcome.result = 1;
  } else if (userSelection === 'scissors' && computerSelection === 'paper') {
    gameOutcome.result = 1;
  } else if (userSelection === 'scissors' && computerSelection === 'rock') {
    gameOutcome.result = 0;
  }
  return gameOutcome;
}

function updateScoreboard(gamePlayed) {
  console.log(gamePlayed);
  let gameStr = `Computer has played: ${gamePlayed.computerSelection}.  User has played: ${gamePlayed.userSelection}. `;

  if (gamePlayed.result === -1) {
    gameStr += 'Game has Tied!';
  } else if (gamePlayed.result === 0) {
    score[0]++;
    gameStr += 'Computer has won!';
    computerScoreCountEl.textContent = score[0];
  } else {
    score[1]++;
    gameStr += 'Player has won!';
    playerScoreCountEl.textContent = score[1];
  }

  resultsBoardPara.textContent = gameStr;
  console.log(score);
}

function resetGame() {
  score[0] = 0;
  score[1] = 0;

  computerScoreCountEl.textContent = score[0];
  playerScoreCountEl.textContent = score[1];

}


function game(playerSelection) {
  const computerSelection = randomSelection();
  const results = playRound(playerSelection, computerSelection);
  
  console.log(results);
  updateScoreboard(results);

  let winString;
  if (score[0] === 5 || score[1] === 5) {
    const winnerStr = score[0] > score[1] ? 'Computer' : 'Player';
    
    resultsBoardPara.textContent = `${winnerStr} has won the game!  Make a selection to start again.`;
    resetGame();
  }
}


buttons.forEach( btn => {
  btn.addEventListener('click', function(e) {
    const playerSelection = e.target.dataset.choice;

    game(playerSelection);
    
  })
})