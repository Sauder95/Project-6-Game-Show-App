const overlay = document.querySelector('#overlay');
const startBtn = document.querySelector('.btn__reset');
let qwerty = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let phraseUl = document.querySelector('#phrase ul');
let tries = document.querySelectorAll('.tries img');

// ==== WRONG ANSWERS ======

let missed = 0;

// ====== PHRASES ARRAY ==========================

phrases = [
    'deadpool',
    'wolverine',
    'spider man',
    'flash',
    'storm'
]


// ===== START GAME ============================

startBtn.addEventListener("click", () => {
   if (startBtn.textContent == "Start Game") {
    overlay.style.display = "none";
   } else if (startBtn.textContent == "Play Again") {
    location.reload();
    
   }
    

});


// ==== RANDOM PHRASE FUNCTION =============

function getRandomPhraseAsArray(arr) {
    let pick = Math.floor(Math.random() * arr.length);
    return phrases[pick];
}

let phraseChoice = getRandomPhraseAsArray(phrases);


// ==== ADD PHRASE TO DISPLAY ==========

function addPhraseToDisplay(phraseChoice) {
    for ( let i = 0; i < phraseChoice.length; i++) {
        let letter = phraseChoice[i];
        let li = document.createElement('li');
        li.textContent = letter;
        if(letter !== ' '){
            li.className = "letter";
            phraseUl.appendChild(li);
        } else {
            li.className = "space";
            phraseUl.appendChild(li);
        }
    }

}
addPhraseToDisplay(phraseChoice);

// ========= CHECK LETTER ==========

function checkLetter(button) {
    let letters = document.querySelectorAll(".letter");
    let match = null;
        for (i = 0; i < letters.length; i++){
            if( button === letters[i].textContent){
                letters[i].classList.add('show');
                match = true;
            }
        }
        return match;
}


// === ADD LISTENER TO KEY BOARD ==============

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let button = e.target;
        button.className = 'chosen';
        button.disabled = true;
        let letterFound = checkLetter(button.textContent);
        if (letterFound === null) {
            tries[missed].src = "images/lostHeart.png";
            missed ++;
            checkWin();
        } else {
            checkWin();
        }
    }
});

// ===== CHECK WIN ================

function checkWin() {
    let letters = document.querySelectorAll(".letter");
    let correct = document.querySelectorAll(".show");
    if (letters.length == correct.length){
        overlay.classList.add('win');
        overlay.firstElementChild.textContent = "You Win!!";
        overlay.style.display = "flex";
        startBtn.textContent = "Play Again";
    } else if (missed > 4) {
        overlay.classList.add('lose');
        overlay.firstElementChild.textContent = "Better luck next time :(";
        overlay.style.display = "flex";
        startBtn.textContent = "Play Again";
    }
}


// ======= RESET THE GAME ====================