 

function getComputerChoice(){
    const ranNum = Math.floor(Math.random() * 3) + 1;
    //console.log(ranNum)
    if ( ranNum == 1 ){
        //console.log("Rock")
        return "rock";
    } else if (ranNum == 2){
        //console.log("Paper")
        return "paper";
    } else {
        //console.log("Scissors")
        return "scissors";
    }
}

function getHumanChoice(){
    const humChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    
    if (humChoice == "rock"){
        //console.log("Rock")
        return "rock"
    } else if (humChoice == "paper"){
        //console.log("Paper")
        return "paper"
    } else if (humChoice == "scissors"){
        //console.log("Scissors")
        return "scissors"
    }
}


function playRound(){
    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors")
        return "win"
        //humanScore += 1;

    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper")
        return "win"
        //humanScore += 1;

    }else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock")
        return "win"
       // humanScore += 1;

    }else if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You lose! Rock beats Scissors")
        return "lose"
        //computerScore += 1;

    }else if(computerChoice == "scissors" && humanChoice == "paper"){
        console.log("You lose! scissors beats paper")
        return "lose"
        //computerScore += 1;

    }else if(computerChoice == "paper" && humanChoice == "rock"){
        console.log("You lose! Paper beats Rock")
        return "lose"
        //computerScore += 1;
    }

}


function playGame(){
    let humanScore = 0;
    let computerScore = 0; 
    const rounds = 5;

    for (i = 1; i <= rounds; i++){
        let roundResult = playRound();
        console.log(`Round result: ${roundResult}`)

        if (roundResult == "win"){
            humanScore += 1;
        }else{
            computerScore += 1;
        }
    }
    
    if (humanScore > computerScore){
        console.log("You won the game")
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }else{
        console.log("You lose the game")
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }

}


window.onload = playGame();