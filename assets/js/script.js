/**
 * Wait for the DOM to finish loading before loading running the game
 * Get the button elements and add event listeners to them
 * Reference from Love Maths project
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "btn-start") {
                startGame();
            } else if (this.getAttribute("data-type") === "btn-exit") {
                location.href = "./index.html";
                console.log('Exit');
            } else if (this.getAttribute("data-type") === "btn-odds" || this.getAttribute("data-type") === "btn-evens") {
                let userOption = this.getAttribute("data-type");
                getUserOption(userOption);
            } else {
                let userNumber = this.getAttribute("data-type");
                getUserNumber(userNumber);
            }
        })
    }
})

const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');

/**
 * This function starts the game by switching the screens
 */
function startGame() {
    console.log('Started');
    instructionsContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
}

let userResult;

/** 
 * This function gets the user selection between odds and evens
 */
function getUserOption(userOption) {
    console.log('User selection');

    if (userOption === 'btn-odds') {
        userResult = 1;
    } else if (userOption === 'btn-evens') {
        userResult = 0;
    }
    console.log(userResult);
}

let userNumberSelected;

/**
 * This function get the user input for the game from 1 to 5 and run the game
 */

function getUserNumber(userNumber) {
    console.log('User number');

    if (userNumber === 'btn-1') {
        userNumberSelected = 1;
    } else if (userNumber === 'btn-2') {
        userNumberSelected = 2;
    } else if (userNumber === 'btn-3') {
        userNumberSelected = 3;
    } else if (userNumber === 'btn-4') {
        userNumberSelected = 4;
    } else if (userNumber === 'btn-5') {
        userNumberSelected = 5;
    }
    console.log(userNumberSelected);
    runGame();
    displayImages();
}

let images = ["/assets/images/1-finger.webp", "/assets/images/2-fingers.webp", "/assets/images/3-fingers.webp", "/assets/images/4-fingers.webp", "/assets/images/5-fingers.webp"];

let finalResult;
let cpuNumber;

function runGame() {
    cpuNumber = (Math.floor(Math.random() * images.length) + 1);
    console.log('CPU Number')
    console.log(cpuNumber);
    let finalNumber = cpuNumber % userNumberSelected;
    if (userResult === finalNumber) {
        finalResult = 'Winner';
    } else {
        finalResult = 'Lose'
    }
    console.log(finalResult); 
    displayImages();
    showAlert();
}

function displayImages() {
    let imageUserResult = images[userNumberSelected - 1];
    let imageUserElement = document.getElementById('user-image');
    imageUserElement.src = imageUserResult;
    let imageCpuResult = images[cpuNumber - 1];
    let imageCpuElement = document.getElementById('cpu-image');
    imageCpuElement.src = imageCpuResult;
}

function showAlert() {
    if (finalResult === 'Winner') {
        alert('You WON! Keep Playing!')
        incrementResults();
    } else {
        alert('You LOST! Try Again!')
    }
    incrementPlayed();
}

function incrementResults() {
    let oldResults = parseInt(document.getElementById('rounds-won').innerText);
    document.getElementById('rounds-won').innerText = ++oldResults;
}

function incrementPlayed() {
    let oldPlayed = parseInt(document.getElementById('rounds-played').innerText);
    document.getElementById('rounds-played').innerText = ++oldPlayed;
}