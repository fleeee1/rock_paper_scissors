// WRITE function getComputer Choice //
//   PRINT randomly "Rock", "Paper", or "Scissors" //
// WRITE function playRound with two parameters: playerSelection and computerSelection, case insensitive //
//   PRINT  string declaring winner //
// WRITE function playGame, include playRound inside this function //
// OBTAIN user input by using prompt() //

function getRandomString() {
    const strings = ["String 1", "String 2", "String 3"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

console.log(getRandomString());
console.log(getRandomString());
console.log(getRandomString());

