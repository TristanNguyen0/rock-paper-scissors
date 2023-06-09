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


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection==="rock"){
        switch(computerSelection){
            case "rock":
                return("Tie! Rock vs. Rock");
                break;
            case "paper":
                return("You Lose! Paper beats Rock");
                break;
            case "scissors":
                return("You Win! Rock beats Scissors");
                break;
        }
    }
    else if(playerSelection==="paper"){
        switch(computerSelection){
            case "rock":
                return("You Win! Paper beats Rock");
                break;
            case "paper":
                return("Tie! Paper vs. Paper");
                break;
            case "scissors":
                return("You Lose! Scissors beats Paper");
                break;
        }
    }
    else if(playerSelection==="scissors"){
        switch(computerSelection){
            case "rock":
                return("You Lose! Rock beats Scissors");
                break;
            case "paper":
                return("You Win! Scissors beats Paper");
                break;
            case "scissors":
                return("Tie! Scissors vs. Scissors");
                break;
        }
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let result;
    for (let i=0;i<5;i++){
        let playerSelection = prompt("Enter rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes("Win")){
            playerScore++;
        }
        else if(result.includes("Lose")){
            computerScore++;
        }
    }
    
    if (playerScore>computerScore){
        console.log(`Player Wins! ${playerScore} - ${computerScore}`);
    }
    else if(computerScore>playerScore){
        console.log(`Computer Wins! ${playerScore} - ${computerScore}`);
    }
    else{
        console.log(`Tie! ${playerScore} - ${computerScore}`);
    }
}