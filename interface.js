
// const playGameButton = document.querySelector('#playGameButton');
const playerChoiceButton = document.querySelectorAll('#playerChoiceButton');
const resetButton = document.querySelector('#resetButton');

const playerScoreValue = document.querySelector('#playerScore');
const computerScoreValue = document.querySelector('#computerScore');
const roundScoreValue = document.querySelector('#roundInfo');


// playGameButton.addEventListener('click', ()=>{
//     playGame();
// });

resetButton.addEventListener('click', () =>{
    resetGame();
    showScores(humanScore, computerScore);
});

playerChoiceButton.forEach((button)=>{

    button.addEventListener('click', (e) => {

        let playerChoice = e.target.textContent;
        playRound(playerChoice);
        showScores(humanScore, computerScore);

    });

});

// playerChoiceButton.addEventListener('click', (e) => {

//     let playerChoice = e.target.textContent;
//     playRound(playerChoice);
//     showScores(humanScore, computerScore);
    
// });

function showScores(humanScore, computerScore){
    
    playerScoreValue.textContent = `Player Score: ${humanScore}`;
    computerScoreValue.textContent = `Computer Score: ${computerScore}`;
    roundScoreValue.textContent = `Round: ${roundCount}`;

}