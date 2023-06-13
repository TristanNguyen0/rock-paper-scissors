//global variables for score keeping and displaying result
let playerScore = 0;
let computerScore = 0;
const score = document.querySelector('div.score');
score.innerText = `${playerScore} - ${computerScore}`;
const result = document.querySelector('div.result');


function getComputerChoice(){
    let rnd = Math.floor(Math.random() * (3-1+1))+1;

    switch(rnd){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}


function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    
    if (playerSelection==="rock"){
        switch(computerSelection){
            case "rock":                
                result.innerText = ("Tie! Rock vs. Rock");
                break;
            case "paper":
                result.innerText = ("You Lose! Paper beats Rock");
                computerScore++;
                break;
            case "scissors":
                result.innerText = ("You Win! Rock beats Scissors");
                playerScore++;
                break;
        }
    }
    else if(playerSelection==="paper"){
        switch(computerSelection){
            case "rock":
                result.innerText = ("You Win! Paper beats Rock");
                playerScore++;
                break;
            case "paper":
                result.innerText = ("Tie! Paper vs. Paper");
                break;
            case "scissors":
                result.innerText = ("You Lose! Scissors beats Paper");
                computerScore++;
                break;
        }
    }
    else if(playerSelection==="scissors"){
        switch(computerSelection){
            case "rock":
                result.innerText = ("You Lose! Rock beats Scissors");
                computerScore++;
                break;
            case "paper":
                result.innerText = ("You Win! Scissors beats Paper");
                playerScore++;
                break;
            case "scissors":
                result.innerText = ("Tie! Scissors vs. Scissors");
                break;
        }
    }
    score.innerText = `${playerScore} - ${computerScore}`; //update score
    if (playerScore===5){ //once a player reaches 5 points
        result.innerText = `Player wins!`;
        playerScore = computerScore = 0; //reset game
    }
    else if (computerScore===5){
        result.innerText = `Computer wins!`;
        playerScore = computerScore = 0; //reset game
    }
}

// function game(){
//     let computerScore = 0;
//     let playerScore = 0;
//     let result;
//     for (let i=0;i<5;i++){
//         let playerSelection = prompt("Enter rock, paper, or scissors");
//         let computerSelection = getComputerChoice();
//         result = playRound(playerSelection, computerSelection);
//         console.log(result);
//         if(result.includes("Win")){
//             playerScore++;
//         }
//         else if(result.includes("Lose")){
//             computerScore++;
//         }
//     }
    
//     if (playerScore>computerScore){
//         console.log(`Player Wins! ${playerScore} - ${computerScore}`);
//     }
//     else if(computerScore>playerScore){
//         console.log(`Computer Wins! ${playerScore} - ${computerScore}`);
//     }
//     else{
//         console.log(`Tie! ${playerScore} - ${computerScore}`);
//     }
// }