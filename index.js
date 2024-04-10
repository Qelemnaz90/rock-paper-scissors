let main = document.querySelector('.main'); // Corrected syntax
let game = document.querySelector('.game'); // Corrected syntax
let play = document.querySelector('.play'); // Corrected syntax
let cancel = document.querySelector('.cancel'); // Corrected syntax
let exit = document.querySelector('.Exit')


play.addEventListener('click', function(){
    main.style.display = 'none';
    game.style.display = 'block';
});

cancel.addEventListener('click', function(){
  window.close()
})

exit.addEventListener('click', function (){
  game.style.display = 'none'
  main.style.display = 'block'
})


const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const firstimg = document.querySelector('#firstimg');
const userChoiceImg = document.querySelector('#user-choice-img');
const audio = document.querySelector('.audio')
const audio1= document.querySelector('.audio1')

let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    updateUserChoiceImage(userChoice);
    generateComputerChoice();
    getResult(userChoice);
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
        firstimg.src = 'images/r.png';

    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
        firstimg.src = 'images/s.png';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
        firstimg.src = 'images/p.png';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(userChoice) {
    if (computerChoice === userChoice) {
        result = 'its a draw!';
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!';
        audio.play()
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!';
        audio1.play()
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!';
        audio.play()
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!';
        audio1.play()
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!';
        audio.play()
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!';
        audio1.play()
    }
    resultDisplay.innerHTML = result;
}

function updateUserChoiceImage(userChoice) {
    if (userChoice === 'rock') {
        userChoiceImg.src = 'images/r.png';
    } else if (userChoice === 'paper') {
        userChoiceImg.src = 'images/p.png';
    } else if (userChoice === 'scissors') {
        userChoiceImg.src = 'images/s.png';
    }
}







