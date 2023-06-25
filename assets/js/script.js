const startButtons = document.getElementById('btn-odds');
const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');

startButtons.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    instructionsContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
}