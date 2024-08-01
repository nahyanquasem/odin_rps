
const rps = ['ROCK','SCISSORS', 'PAPER'];
let humanScore = 0;
let computerScore = 0;


function getRandomNumber(maxValue){

    return Math.floor((Math.random() * maxValue));

}

function getComputerChoice(){

    let computerChoice = getRandomNumber(3);
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

function playRound(){

    let computerInput = getComputerChoice();
    let humanInput = getHumanChoice();

    console.log(`Computer chose ${computerInput}`);
    console.log(`Human chose ${humanInput}`)

    let outcome = rpsLogic(computerInput, humanInput);

    if (outcome === 0){
        console.log('DRAW');
    }

    else if (outcome === 1){
        console.log('Computer wins');
        computerScore = computerScore+1;
    }
    else if (outcome === 2){
        console.log('Human wins');
        humanScore = humanScore+1;
    }

    console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);


}

function rpsLogic(choice1, choice2){

    // Rock beats scissors, scissors beat paper, and paper beats rock.

    if (choice1 === choice2) return 0;

    if( (choice1==='ROCK' && choice2==='SCISSORS') ) {console.log('ROCK beats SCISSORS');return 1;}
    if( (choice1==='SCISSORS' && choice2==='ROCK') ) {console.log('ROCK beats SCISSORS');return 2;}

    if( (choice1==='ROCK' && choice2==='PAPER') ) {console.log('PAPER beats ROCK');return 2;}
    if( (choice1==='PAPER' && choice2==='ROCK') ) {console.log('PAPER beats ROCK');return 1;}

    if( (choice1==='SCISSORS' && choice2==='PAPER') ) {console.log('SCISSORS beats PAPER');return 1;}
    if( (choice1==='PAPER' && choice2==='SCISSORS') ) {console.log('SCISSORS beats PAPER');return 2;}
    
}

let i = 0;

for(i=0;i<5;i++){

    // playRound();

}