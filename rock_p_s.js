function getComputerChoice() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomIndex];
}

    function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }   

    if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    }

    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    }

    if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    }

    if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    }

    if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    }
    else {
        return "It's a tie! You both suck";
    }
}

function playGame() {
    let playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors").toLowerCase();
    
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("Invalid choice! Please choose again.");
        return;
    }

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

playGame();
