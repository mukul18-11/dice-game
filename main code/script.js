'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score1.textContent = 0;
score0.textContent = 0;

diceEl.classList.add('hidden');   

const scores = [0,0];

let currScore = 0;
let activePlayer = 0;

// Rolling dice function

btnRoll.addEventListener('click', function() {
    // 1. Generate Random no.
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);


    // 2. Display dice no.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // 3. If its 1, switch to the next player.
    if(dice != 1) {
        currScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currScore;
    }
    else {
        activePlayer = activePlayer === 0 ? 1 : 0;


    }
    
})

