
const playGameButton = document.querySelector('#playGameButton');
const playerChoiceButton = document.querySelector('#playerChoice');


playGameButton.addEventListener('click', ()=>{
    playGame();
});

playerChoiceButton.addEventListener('click', (e) => {

    let playerChoice = e.target.textContent;
    console.log(playerChoice);
    
});

