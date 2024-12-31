// get all html nodes/elements
const numRound = document.querySelector('.roundCounter');
const humanScore = document.querySelector('.pScore');
const computerScore = document.querySelector('.cCount');
const tieCount = document.querySelector(".ties");
const resultMessage = document.querySelector(".winnerOutput")
buttons = document.querySelectorAll("button");


let playPointsCount = 0;
let cpuPointsCount = 0;

let winnerArray =[];

// get computerChoice
function getComputerChoice(){
    const cpuChoice = Math.floor(Math.random() * 2) + 1;
    choiceArray = ["rock", "paper", "scissors"];
    return choiceArray[cpuChoice]
}

// get player choice and activate the game
function userSelection(){
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            game(button.value);
        });
    });
}

// play a round
function game(playerMove){
    let wins = checkWins();
    if (wins == 5 || wins > 5){
       return;
    }

    let cpuMove = getComputerChoice();
    let roundWinner = playRound(playerMove, cpuMove);
    updateScoreRound(roundWinner, cpuMove);
    winnerArray.push(roundWinner);
    incrementWinnerCount(roundWinner);
    if(playPointsCount ==  5 && cpuPointsCount <5){
        resultMessage.innerHTML = `Congrats, You won the game!`
    }else if(playPointsCount <  5 && cpuPointsCount == 5){
        resultMessage.innerHTML = `Sorry, You lose the game!`
    }
    

}


// get round winner
function playRound(humanChoice, computerChoice){

        if (humanChoice == "rock" && computerChoice == "scissors"){
            return "win"

        }else if (humanChoice == "scissors" && computerChoice == "paper"){
            return "win"

        }else if (humanChoice == "paper" && computerChoice == "rock"){
            return "win"

        }else if(computerChoice == "rock" && humanChoice == "scissors"){
            return "lose"

        }else if(computerChoice == "scissors" && humanChoice == "paper"){
            return "lose"

        }else if(computerChoice == "paper" && humanChoice == "rock"){
           // console.log("You lose! Paper beats Rock")
            return "lose"
        }else if(humanChoice == computerChoice){
            //console.log("Tie")
            return "tie"
        }

}    
       
// Update Score
function updateScoreRound(roundWinner, cpuMove){

    if (roundWinner == "win"){

        humanScore.textContent = parseInt(humanScore.textContent) + 1;
        numRound.textContent = parseInt(numRound.textContent) + 1;
        resultMessage.textContent = `You win the round! Computer chose ${cpuMove}`

    }else if (roundWinner == "lose"){

        computerScore.textContent = parseInt(computerScore.textContent) + 1
        numRound.textContent = parseInt(numRound.textContent) + 1
        resultMessage.textContent = `You  lose the round! Computer chose ${cpuMove}`

    } else if (roundWinner == "tie"){

        tieCount.textContent = parseInt(tieCount.textContent) + 1
        numRound.textContent = parseInt(numRound.textContent) + 1
        resultMessage.textContent = `Tie! Computer chose ${cpuMove}`
    }
}

// increment the player and cpu score count 
function incrementWinnerCount(result){
    if (result == "win"){
        playPointsCount ++
    }else if(result == "lose"){
        cpuPointsCount ++;

    }

}
// check winner
function checkWins() {
    const pWinCount = winnerArray.filter((item) => item == "win").length;
    const cWinCount = winnerArray.filter((item) => item == "lose").length;
    return Math.max(pWinCount, cWinCount);
}

//activate the buttons
userSelection();
