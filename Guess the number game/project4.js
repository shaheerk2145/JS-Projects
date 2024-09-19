let randomNumber= parseInt(Math.random() *100+1);
console.log(randomNumber);


const submit = document.querySelector('#submit');
const userGuess= document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startGame = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numOfGuess=1;
let playGame =true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userGuess.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please Enter a valid number`);
    }
    else if(guess < 1 ){
        alert(`Please Enter a number greater than 1`);
    }
    else if(guess > 100){
        alert(`Please Enter a  number less than 100`);
    }
    else{
        previousGuess.push(guess)
        if(numOfGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over ! .This was your last Guess.Actual  guess value was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayGuess(guess);
        displayMessage(`You have guessed it right .You won!`);
        endGame();
    }else if (guess < randomNumber){
        displayMessage(`Your guess is very low`);
    }
    else if (guess > randomNumber){
        displayMessage(`Your guess is very high`);
    }

}
function displayGuess(guess){
    userGuess.value="";
    guessSlot.innerHTML += `${guess}  `;
    numOfGuess++;
    remaining.innerHTML=`${11-numOfGuess}`;
    
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
    userGuess.value="";
    userGuess.setAttribute('disabled', ' ');
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame">Start a new game</h2>`;
    startGame.appendChild(p); 
    playGame=false;
    newGame();   
}
function newGame(){
    const startNewGame = document.querySelector('#newGame');
    startNewGame.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() *100+1);
        previousGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = ` `;
        remaining.innerHTML=`${11-numOfGuess}`;
        userGuess.removeAttribute('disabled');
        startGame.removeChild(p);

        playGame=true;
    });
}