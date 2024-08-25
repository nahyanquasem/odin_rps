
const playGameButton = document.querySelector('#playGameButton');

const playerChoiceButton = document.querySelector('#playerChoice');


playGameButton.addEventListener('click', ()=>{
    playGame();
});

playerChoiceButton.addEventListener('click', (e) => {

    let buttonId = e.target.id;
    
    switch (buttonId){
        case 'rockButton':
            console.log('The rock button was pressed');
            break;
        case 'paperButton':
            console.log('The paper button was pressed');
            break;
        case 'scissorButton':
            console.log('The scissor button was pressed');
            break;
        default:
            console.log('Invalid Input');

    }

});

