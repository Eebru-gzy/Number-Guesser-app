/*
TODO
- player must guess a number between a min and max;
- Player gets a certain amount oof guesses
- Notify Player of Guesses remaining
- Notify player of the corrext answer if loose
- Let player decide play again
*/

// Initiating game values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;



// UI elements

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-number'),
      message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;


//btn eventListener
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);


    //validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }


    //check if won
    if (guess === winningNum) {
        guessInput.disabled = true
        // change border color
        guessInput.style.borderColor = 'green';
        //set message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

    }else {

    }
})


function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color
}