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

const correctLetters = [];
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

// update the wrong letters 
const updateWrongLettersEl = () => {
    console.log("updated! ")
}

// show notification 
const showNotification = () => {
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show")
    }, 2000);
}

// keydown letter press 
window.addEventListener("keydown", e => {
    // range of letters
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord()
            }
            else {
                showNotification();
            }
        }
    }
    else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);

            updateWrongLettersEl();
        }
        else {
            showNotification();
        }
    }
})

displayWord();