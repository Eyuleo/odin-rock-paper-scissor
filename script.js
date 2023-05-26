
const computerRandChoice = ['rock','paper','scissors']
function getComputerChoice(){
  const randomIndex = Math.floor(Math.random()*computerRandChoice.length);
  const randomChoice = computerRandChoice[randomIndex];

 return randomChoice;


}



let userScore = 0;
let computerScore = 0;

function game(){
  let userSelection = prompt(`pick a move:`);
  let computerSelection = getComputerChoice();

function playingRound(userSelection, computerSelection){
  if(userSelection === computerSelection){
    console.log(`computer move:${computerSelection}`);
    console.log(`it's a tie!`);
  }else if(userSelection === 'rock' && computerSelection === 'scissors'){
    console.log(`computer move:${computerSelection}`);
    console.log(`you won! ${userSelection} beats ${computerSelection} `);
    userScore++;
  }else if(userSelection === 'rock' && computerSelection === 'paper'){
    console.log(`computer move:${computerSelection}`);
    console.log(`You lost! ${computerSelection} beats ${userSelection}`);
    computerScore++;
  }else if(userSelection === 'paper' && computerSelection === 'rock'){
    console.log(`computer move:${computerSelection}`);
    console.log(`you won! ${userSelection} beats ${computerSelection}`);
    userScore++;
  }else if(userSelection === 'paper' && computerSelection === 'scissors'){
    console.log(`computer move:${computerSelection}`);
    console.log(`You lost! ${computerSelection} beats ${userSelection}`);
    computerScore++;
  }else if(userSelection === 'scissors' && computerSelection === 'rock'){
    console.log(`computer move:${computerSelection}`);
    console.log(`You lost! ${computerSelection} beats ${userSelection}`);
    computerScore++;
  }else if(userSelection === 'scissors' && computerSelection === 'Paper'){
    console.log(`computer move:${computerSelection}`);
    console.log(`you won! ${userSelection} beats ${computerSelection}`);
    userScore++;
  }
}
playingRound(userSelection,computerSelection)
}


for (let i = 1; i <= 5; i++){
  game();
}


if(userScore > computerScore){
  console.log(`You won! this round with score of ${userScore}`);
}else if(userScore < computerScore){
  console.log(`Computer won! this round with score of ${computerScore}`);
}else{
  console.log(`It's a tie round!`);
}




/* work on the conditionals */





