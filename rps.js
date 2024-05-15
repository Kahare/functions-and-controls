// Function to play a single round and determine the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    }
}

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to prompt the user for their choice
function playerChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

// Function to play the game for 5 rounds
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${roundResult}`);
        console.log(`Player chose: ${capitalize(playerSelection)}`);
        console.log(`Computer chose: ${capitalize(computerSelection)}`);
        
        if (roundResult.startsWith("You win")) {
            scorePlayer++;
        } else if (roundResult.startsWith("You lose")) {
            scoreComputer++;
        }
        
        console.log(`Score: Player ${scorePlayer} - Computer ${scoreComputer}`);
    }

    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("Congrats, you win!!");
    } else if (scorePlayer < scoreComputer) {
        console.log("Better luck next time.");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
game();
