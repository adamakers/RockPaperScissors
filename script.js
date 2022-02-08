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
  console.log('########################################################')
  console.log(`User chose: ${userSelection} |||| Computer chose: ${computerSelection}`);
  
  if (userSelection === computerSelection) {
    return -1;
  }

  // 0 if computer wins 1 if user wins
  if  (userSelection === 'rock' && computerSelection === 'paper') {
    return 0;
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    return 1;
  } else if (userSelection === 'paper' && computerSelection === 'scissors') {
    return 0;
  } else if (userSelection === 'paper' && computerSelection === 'rock') {
    return 1;
  } else if (userSelection === 'scissors' && computerSelection === 'paper') {
    return 1;
  } else if (userSelection === 'scissors' && computerSelection === 'rock') {
    return 0;
  }
}

function updateScoreboard(gameResults) {
  
  if (gameResults === -1) {
    resultsBoardPara.textContent = 'Game has Tied!';
  } else if (gameResults === 0) {
    score[0]++;
    resultsBoardPara.textContent = 'Computer has won!';
    computerScoreCountEl.textContent = score[0];
  } else {
    score[1]++;
    resultsBoardPara.textContent = 'Player has won!';
    playerScoreCountEl.textContent = score[1];
  }
  console.log(score);
}


function game(playerSelection) {
  const computerSelection = randomSelection();
  const results = playRound(playerSelection, computerSelection);
  
  console.log(results);
  updateScoreboard(results);
}


buttons.forEach( btn => {
  btn.addEventListener('click', function(e) {
    const playerSelection = e.target.dataset.choice;

    game(playerSelection);
    
  })
})