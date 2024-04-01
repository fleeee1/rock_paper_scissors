// WRITE function getComputer Choice //
//   PRINT randomly "Rock", "Paper", or "Scissors" //
// WRITE function playRound with two parameters: playerSelection and computerSelection, case insensitive //
//   PRINT string declaring winner //
// WRITE function playGame, include playRound inside this function //
// OBTAIN user input by using prompt() //

function getComputerChoice() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }   

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    }

    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    }

    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    }
        else {
            return "It's a tie! You both suck";
        }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));