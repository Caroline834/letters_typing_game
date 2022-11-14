
let randomWords = document.getElementById("randomWords");
let userInput = document.getElementById("userInput");
let typingLetter = "";
let showAns = document.getElementById("showAnswer");
var letterCount = document.getElementById("wordCount");

function randomLetters() {
    randomWords.innerHTML = "";

    for (let index = 0; index < letterCount.value; index++) {
        random = Math.floor(Math.random() * (122 - 97 + 1) + 97);
        randomWords.innerHTML += String.fromCharCode(random);
    }
    console.log(letterCount.value);
}

window.addEventListener("keypress", function (e) {
    typingLetter += e.key;
    document.getElementById("userInput").innerHTML +=
        `<div>${e.key}</div>`;

    if (userInput.children.length >= letterCount.value)
        checkAnswer();
    console.log(typingLetter);
});

function checkAnswer() {

        if (typingLetter == randomWords.innerHTML) {
            showAns.innerHTML = "Correct!";
            showAns.style.color = "Green";
            randomLetters();
        } else if (typingLetter > letterCount.value) {
            showAns.innerHTML = "Wrong!";
            showAns.style.color = "red";
            randomLetters();
        }

        setTimeout(() => {
            clear();
        }, 500);
}
function clear() {
    typingLetter = "";
    document.getElementById("userInput").innerHTML = "";
    showAns.innerHTML = "";
}