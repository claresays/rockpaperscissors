let computerScore = 0;
let playerScore = 0;


const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');

const choice = document.querySelector('#choice');
const computerChoice = document.querySelector('#computerchoice');
const playerChoice = document.querySelector('#playerchoice');

const score = document.querySelector('#score');
const computerscore = document.querySelector('#computerscore');
const playerscore = document.querySelector('#playerscore');

computerscore.textContent = 'Computer : 0';
playerscore.textContent = 'Player : 0';

rock.addEventListener("click",function() {
    playRound('rock',computerPlay())
})
paper.addEventListener("click",function() {
    playRound('paper',computerPlay())
})
scissors.addEventListener("click",function(){
    playRound('scissors',computerPlay())
})

function computerPlay() {
    var rpsArray = ['Rock','Paper','Scissors'];
    var rand = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return rand;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        choice.textContent = 'Computer chose ' + computerSelection + ". You Lose! Paper beats Rock"
        computerScore++
        computerscore.textContent = 'Computer : ' + computerScore
       
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        choice.textContent = 'Computer chose ' + computerSelection + ". You Lose! Scissors beats Paper"
        computerScore++
        computerscore.textContent = 'Computer : ' + computerScore
       
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        choice.textContent = 'Computer chose ' + computerSelection + ". You Lose! Rock beats Scissors"
        computerScore++
        computerscore.textContent = 'Computer : ' + computerScore
       
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        choice.textContent = 'Computer chose ' + computerSelection + ". You win!"
        playerScore++
        playerscore.textContent = 'Player : ' + playerScore
   
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        choice.textContent = 'Computer chose ' + computerSelection + ". You win!"
        playerScore++
        playerscore.textContent = 'Player : ' + playerScore
       
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        choice.textContent = 'Computer chose ' + computerSelection + ". You win!"
        playerScore++
        playerscore.textContent = 'Player : ' + playerScore
       
    } else {
        return "It's a tie."
    }
    endGame(computerScore,playerScore)
}

function playerSelection() {
    
}


function game() {
    for (let i=0; i<5; i++) {
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log('Your score is : '+ playerScore + '. Computer Score is : ' + computerScore);
    }
    if (playerScore > computerScore) {
        return console.log('You win!')
    } else if (playerScore < computerScore) {
        return console.log('You lose...')
    } else {
        return console.log('It is a tie.')
    }

}

function endGame(computerScore, playerScore) {
    if (computerScore === 5 || playerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        if (computerScore > playerScore) {
            return alert("You lose...Try again!")
        } else {
            return alert("You win! Good job!")
        }
    }
}

game();