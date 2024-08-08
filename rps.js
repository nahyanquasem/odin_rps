
const rps = ['ROCK','SCISSORS', 'PAPER'];
const player_01_wins = 1;
const player_02_wins = 2;


let humanScore = 0;
let computerScore = 0;



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

function rpsLogic(choice1, choice2){

    // Rock beats scissors, scissors beat paper, and paper beats rock.

    if (choice1 === choice2) return 0;

    if( (choice1==='ROCK' && choice2==='SCISSORS') ) {console.log('ROCK beats SCISSORS');return player_01_wins;}
    if( (choice1==='SCISSORS' && choice2==='ROCK') ) {console.log('ROCK beats SCISSORS');return player_02_wins;}

    if( (choice1==='PAPER' && choice2==='ROCK') ) {console.log('PAPER beats ROCK');return player_01_wins;}
    if( (choice1==='ROCK' && choice2==='PAPER') ) {console.log('PAPER beats ROCK');return player_02_wins;}

    if( (choice1==='SCISSORS' && choice2==='PAPER') ) {console.log('SCISSORS beats PAPER');return player_01_wins;}
    if( (choice1==='PAPER' && choice2==='SCISSORS') ) {console.log('SCISSORS beats PAPER');return player_02_wins;}
    
}

function playRound(){

    let computerInput = getComputerChoice();
    let humanInput = getHumanChoice();

    console.log(`Computer chose ${computerInput}`);
    console.log(`Human chose ${humanInput}`)

    let roundWinner = rpsLogic(computerInput, humanInput);

    if (roundWinner === 0){
        console.log('DRAW this round');
    }

    else if (roundWinner === player_01_wins){
        console.log('Computer wins round');
        computerScore = computerScore+1;
    }

    else if (roundWinner === player_02_wins){
        console.log('Human wins round');
        humanScore = humanScore+1;
    }

    console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);
}


function playGame(){
    console.log('Best of 5 Match, first to 3 points wins');

    let round = 1;

    while( (round <=5) && ( (computerScore != 3) || (humanScore != 3) )){

        console.log(`#############   Round ${round}   #############`);
        playRound();
        round++;
    }

    if(computerScore===humanScore) {console.log('Match is a draw');}
    else if (computerScore > humanScore) {console.log(`Computer wins with ${computerScore} points`);}
    else {console.log(`Human wins with ${humanScore} points`);}

    console.log('Game over');
}

playGame();
