
// generate a random number between 1 and 3
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

function getPlayerSelection() {
  let promptValue = prompt("Enter your selection").toLowerCase();

  if (promptValue !== 'rock' && promptValue !== 'paper' && promptValue !== 'scissors') {
    console.log('incorrect value.  try again');
    return getPlayerSelection();
  }

  return promptValue;
}

// player selection
  // prompt asks what user wants to generate
  // convert r - 1, p - 2, s - 3.
    // dicitonary or switch case

function playRound(userSelection, computerSelection) {

  console.log(`User chose: ${userSelection} |||| Computer chose: ${computerSelection}`);
  

  if (userSelection === computerSelection) {
    return 'Round tied!';
  }

  if  (userSelection === 'rock' && computerSelection === 'paper') {
    return "Computer wins!";
  } else if (userSelection === 'rock' && computerSelection === 'scissors') {
    return "User Wins!";
  } else if (userSelection === 'paper' && computerSelection === 'scissors') {
    return "Computer Wins!";
  } else if (userSelection === 'paper' && computerSelection === 'rock') {
    return "User Wins!";
  } else if (userSelection === 'scissors' && computerSelection === 'paper') {
    return "User Wins!"
  } else if (userSelection === 'scissors' && computerSelection === 'rock') {
    return "Computer Wins!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = randomSelection();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();





  