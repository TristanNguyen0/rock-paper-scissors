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