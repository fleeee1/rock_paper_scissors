// Declare variables to keep track of scores
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultsDiv = document.querySelector('.results');

function displayResult(result) {
    console.log("Result: " + result);
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = result + " Player: " + playerScore + " - Computer: " + computerScore;
    resultsDiv.appendChild(resultParagraph);
}

function getComputerChoice() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "It's a tie! You both suck";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "It's a tie! You both suck";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "It's a tie! You both suck";
        }
    }
}

function handleButtonClick(playerSelection) {
    console.log("Button clicked: " + playerSelection);
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);


    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

displayResult(result);

    if (playerScore === 5) {
        resetGame();
        alert("Congratulations! You win the game!");
        
    } else if (computerScore === 5) {
        resetGame();
        alert("Sorry, you lose the game!");
        
    }
}

rockButton.addEventListener('click', function () {
    handleButtonClick('rock');
});

paperButton.addEventListener('click', function () {
    handleButtonClick('paper');
});

scissorsButton.addEventListener('click', function () {
    handleButtonClick('scissors');
});

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}
