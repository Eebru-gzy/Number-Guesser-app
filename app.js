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
    winningNum = getRandomNum(min, max),
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


//Play again function
game.addEventListener('mousedown', function (e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})
//btn eventListener
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);


    //validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }


    //check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`, "green");

    }else {
        //Wrong Number

        guessesLeft -= 1;
         if (guessesLeft === 0) {
             gameOver(false, `Game Over, You Lost. The Correct Number Was ${winningNum}`);

             //disable the submit button
            // e.target.disabled = true;

         }else {
                //game continue - wrong answer

                // change border color
                guessInput.style.borderColor = "red";

                //clear input
                guessInput.value = '';


                //tell user it's wrong number
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red' );


            }
    }
})


function  gameOver (won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';

        //disable input
        guessInput.disabled = true
        // change border color
        guessInput.style.borderColor = color;
        //msg color
        message.style.color = color
        //set message
        setMessage(msg);


        //play Again
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again'
}


function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color
}


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}