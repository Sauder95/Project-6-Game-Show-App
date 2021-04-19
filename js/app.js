const overlay = document.querySelector('#overlay');
const startBtn = document.querySelector('.btn_reset');
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');



// =====START GAME============================

overlay.lastElementChild.addEventListener("click", () => {
    overlay.style.display = "none";

});

// ======PHRASES ARRAY==========================

phrases = [
    'DEADPOOL',
    'WOLVERINE',
    'SPIDER MAN',
    'FLASH',
    'STORM'
]


