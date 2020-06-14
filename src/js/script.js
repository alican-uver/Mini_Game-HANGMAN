// Select Elements
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

// html figure elements 
const figureParts = document.querySelectorAll(".figure-part");
// words
const words = ['application', 'programming', 'interface', 'wizard'];

// get random words
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['w','i','z','a','r','d'];
const wrongLetters = [];
// show hidden word
const displayWord = () => {
    wordEl.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')}
    `;

    // remove spaces on letters 
    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!';
        popup.style.display = 'flex';
    }
}

displayWord();