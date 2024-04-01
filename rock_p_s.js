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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
    }   

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";

    if (playerSelection === "Paper" && computerSelection === "Rock") {
            return 

    if (playerSelection === "Paper" && computerSelection === "Rock") {
                return 

    if (playerSelection === "Paper" && computerSelection === "Rock") {
                    return 

    if (playerSelection === "Paper" && computerSelection === "Rock") {
                        return 

    if (playerSelection === "Paper" && computerSelection === "Rock") {
                            return 
    }
    
    
    
    
    const playerOptRock = "Rock";
    const playerOptPaper = "Paper";
    const playerOptScissors = "Scissors";

    
    
    
    if (playerSelection === computerSelection) {
        return "It's a tie! You both suck";
    if (playerSelection)
    }
}



const resultPaperW = "You Lose! Paper beats Rock"
const resultRockW = "You Lose! Rock beats Scissors"
const resultScissorsW = "You Lose! Scissors beats Paper"
const resultDraw = "It's a tie! You both suck"
