var playerWins = 0;
var computerWins = 0;

function getComputerChoice() {
    let choices = Math.floor(Math.random() * 3);
    switch(choices) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2: 
            return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection) {
        return ("Tie!")
    }

    if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection == 'PAPER') ||
        (playerSelection.toUpperCase() === 'PAPER' && computerSelection == 'SCISSORS') ||
        (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection == 'ROCK')) {
            computerWins++;
            return ("You Lost! " + computerSelection + " beats " + playerSelection.toUpperCase());
    } 

    if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection.toUpperCase() === 'PAPER' && computerSelection == 'ROCK') ||
        (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection == 'PAPER')) {
            playerWins++;
            return ("You Won! " + playerSelection.toUpperCase() + " beats " + computerSelection);
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = getInput();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Player: " + playerWins + ", Computer: " + computerWins);
}

function getInput() {
    let playerSelection = window.prompt("Pick your move.");
    if (playerSelection.toUpperCase() === 'ROCK' || playerSelection.toUpperCase() === 'PAPER' || playerSelection.toUpperCase() === 'SCISSORS') {
        return playerSelection;
    } else {
        return getInput();
    }
}

game();