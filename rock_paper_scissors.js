// get all html nodes/elements
const numRound = document.querySelector('.roundCounter');
const humanScore = document.querySelector('.pScore');
const computerScore = document.querySelector('.cCount');
const tieCount = document.querySelector(".ties");
const resultMessage = document.querySelector(".winnerOutput")
buttons = document.querySelectorAll("button");


let totalRoundsTally = 0;
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
if (totalRoundsTally == 5){
       return;
    }

    let cpuMove = getComputerChoice();
    let roundWinner = playRound(playerMove, cpuMove);
    updateScoreRound(roundWinner, cpuMove);
    winnerArray.push(roundWinner);
    totalRoundsTally++;
    if(totalRoundsTally == 5){
        checkWins();
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

        }else if(computerChoice == "paper" && humanChoice == "rock"){ck")
            return "lose"
        }else if(humanChoice == computerChoice){
            return "tie"
        }

}    
       
// Update Score
function updateScoreRound(roundWinner, cpuMove){

    if (roundWinner == "win"){

        humanScore.innerText = parseInt(humanScore.innerText) + 1;
        numRound.innerText = parseInt(numRound.innerText) + 1;
        resultMessage.innerHTML = `You win the round! Computer chose ${cpuMove}`

    }else if (roundWinner == "lose"){

        computerScore.innerText = parseInt(computerScore.innerText) + 1
        numRound.innerText = parseInt(numRound.innerText) + 1
        resultMessage.innerHTML = `You  lose the round! Computer chose ${cpuMove}`

    } else if (roundWinner == "tie"){

        tieCount.innerText = parseInt(tieCount.innerText) + 1
        numRound.innerText = parseInt(numRound.innerText) + 1
        resultMessage.innerHTML = `Tie! Computer chose ${cpuMove}`
    }
}

// check winner

function checkWins() {
    const playerWinCount = winnerArray.filter((item) => item == "win").length;
    const cpuWinCount = winnerArray.filter((item) => item == "lose").length;

    if (playerWinCount > cpuWinCount){
        resultMessage.innerHTML = `Congrats! You are the winner!`
    }else if(playerWinCount < cpuWinCount){
        resultMessage.innerHTML = `Sorry, You  lose the game!`
    }else {
        alert("Tie game!")
    }
}

//activate the buttons
userSelection();
