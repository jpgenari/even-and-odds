document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "btn-start") {
                startGame();
            } else if (this.getAttribute("data-type") === "btn-exit") {
                location.href = "./index.html";
                console.log('Exit');
            } else {
                let userOption = this.getAttribute("data-type");
                getUserOption();
            }
        })
    }
})

const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');

function startGame() {
    console.log('Started');
    instructionsContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
}

function getUserOption() {
    console.log('User selection')
}