const playerChoiceOutput = document.querySelector('#playerChoiceOutput');
const playerChoiceDiv = document.querySelector('#playerChoice');
const computerChoiceOutput = document.querySelector('#computerChoiceOutput');
const roundStateOutput = document.querySelector('#roundState');
const gameLogicOutput = document.querySelector('#gameLogicOutput');
const gameStateOutput = document.querySelector('#gameStateOutput');

const rps = ['ROCK','SCISSORS', 'PAPER'];
const player_01_wins = 1;
const player_02_wins = 2;


let humanScore = 0;
let computerScore = 0;
let roundCount = 0;



function getRandomNumber(maxValue){
    
    return Math.floor((Math.random() * maxValue));
    
}

function getComputerChoice(){

    let computerChoice = getRandomNumber(rps.length);
    return rps[computerChoice];

}

function validateHumanChoice(text_input=""){
    
    return rps.includes(text_input);
}

function getHumanChoice(){

    let humanChoice = prompt("Please choose ROCK, SCISSORS, PAPER").toUpperCase();

    while(!validateHumanChoice(humanChoice)){

        humanChoice = prompt("Invalid choice, please choose ROCK SCISSORS PAPER only").toUpperCase();
    }

    return humanChoice;

}

function rpsLogic(player_01_choice, player_02_choice){

    // Rock beats scissors, scissors beat paper, and paper beats rock.


    let RBS = 'ROCK beats SCISSORS';
    let PBR = 'PAPER beats ROCK';
    let SBR = 'SCISSORS beats PAPER';

    if (player_01_choice === player_02_choice) return 0;

    if( (player_01_choice==='ROCK' && player_02_choice==='SCISSORS') ) {console.log('ROCK beats SCISSORS');gameLogicOutput.textContent = RBS;return player_01_wins;}
    if( (player_01_choice==='SCISSORS' && player_02_choice==='ROCK') ) {console.log('ROCK beats SCISSORS');gameLogicOutput.textContent = RBS;return player_02_wins;}

    if( (player_01_choice==='PAPER' && player_02_choice==='ROCK') ) {console.log('PAPER beats ROCK');gameLogicOutput.textContent = PBR;return player_01_wins;}
    if( (player_01_choice==='ROCK' && player_02_choice==='PAPER') ) {console.log('PAPER beats ROCK');gameLogicOutput.textContent = PBR;return player_02_wins;}

    if( (player_01_choice==='SCISSORS' && player_02_choice==='PAPER') ) {console.log('SCISSORS beats PAPER');gameLogicOutput.textContent = SBR;return player_01_wins;}
    if( (player_01_choice==='PAPER' && player_02_choice==='SCISSORS') ) {console.log('SCISSORS beats PAPER');gameLogicOutput.textContent = SBR;return player_02_wins;}
    
}

function playRound(humanInput){

    let computerInput = getComputerChoice();

    roundCount += 1;

    console.log(`Computer chose ${computerInput}`);
    console.log(`Human chose ${humanInput}`);

    playerChoiceOutput.textContent = `Human chose ${humanInput}`;
    computerChoiceOutput.textContent = `Computer chose ${computerInput}`;


    let roundWinner = rpsLogic(computerInput, humanInput);

    if (roundWinner === 0){
        console.log('DRAW this round');
        gameLogicOutput.textContent = '';
        roundStateOutput.textContent = 'DRAW this round';
    }

    else if (roundWinner === player_01_wins){
        console.log('Computer wins round');
        roundStateOutput.textContent = 'Computer wins round';
        computerScore = computerScore+1;
    }

    else if (roundWinner === player_02_wins){
        console.log('Human wins round');
        roundStateOutput.textContent = 'Human wins round';
        humanScore = humanScore+1;
    }

    console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);
    checkWinningState();
}


function playGame(){
    console.log('Best of 5 Match, first to 3 points wins');

    let round = 1;
    humanScore = 0;
    computerScore = 0;

    while( (round <=5) &&  (computerScore != 3) && (humanScore != 3) ) {

        console.log(`#############   Round ${round}   #############`);
        playRound();
        round++;
    }

    if(computerScore===humanScore) {console.log('Match is a draw');}
    else if (computerScore > humanScore) {console.log(`Computer wins with ${computerScore} points`);}
    else {console.log(`Human wins with ${humanScore} points`);}

    console.log('Game over');
}


function checkWinningState(){
    if (humanScore === 5){

        gameStateOutput.textContent = 'Players wins the game, reset game to play again';
        removeGameButtons();

    }
    else if (computerScore === 5){
        gameStateOutput.textContent = 'Computer wins the game, reset game to play again'
        removeGameButtons();
    }

}


function removeGameButtons(){

    playerChoiceDiv.remove();

}


function resetGame(){
    computerScore = 0;
    humanScore = 0;
    roundCount = 0;
    console.clear();
    location.reload();
}
