
const playGameButton = document.querySelector('#playGameButton');
const playerChoiceButton = document.querySelector('#playerChoice');


playGameButton.addEventListener('click', ()=>{
    playGame();
});

playerChoiceButton.addEventListener('click', (e) => {

    let playerChoice = e.target.textContent;

    switch (playerChoice) {
        case 'ROCK':
            console.log('You have entered ROCK');
            break;
        case 'PAPER':
            console.log('You have entered PAPER');
            break;
        case 'SCISSORS':
            console.log('You have entered SCISSOR');
            break;
        default:
            console.log('Invalid Input');
    }
    
});

