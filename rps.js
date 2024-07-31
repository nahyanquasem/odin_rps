
const rps = ['ROCK','SCISSORS', 'PAPER']


function getRandomNumber(maxValue){

    return Math.floor((Math.random() * maxValue));

}

function getComputerChoice(){

}

function getHumanChoice(){

}

function rpsLogic(choice1, choice2){

    // Rock beats scissors, scissors beat paper, and paper beats rock.

    if( choice1==='ROCK' && choice2==='ROCK') return 0;
    if( choice1==='SCISSORS' && choice2==='SCISSORS') return 0;
    if( choice1==='PAPER' && choice2==='PAPER') return 0;


    if( (choice1==='ROCK' && choice2==='SCISSORS') ) return 1;
    if( (choice1==='SCISSORS' && choice2==='ROCK') ) return 2;

    if( (choice1==='ROCK' && choice2==='PAPER') ) return 2;
    if( (choice1==='PAPER' && choice2==='ROCK') ) return 1;

    if( (choice1==='SCISSORS' && choice2==='PAPER') ) return 1;
    if( (choice1==='PAPER' && choice2==='SCISSORS') ) return 2;
    
}




// let text1 = 'ROCK';
// let text2 = 'PAPER';

// console.log(rpsLogic(text1,text2))
