// Function to display the original text in a popup
function showOriginalText() {
    let text = document.getElementById("myTextArea").value;
    alert("Original Text: " + text);
}

// Function to display the text in all capital letters in a popup
function showCapitalLetters() {
    let text = document.getElementById("myTextArea").value;
    alert("Capitalized Text: " + text.toUpperCase());
}

// Function to display the text in all small letters in a popup
function showSmallLetters() {
    let text = document.getElementById("myTextArea").value;
    alert("Lowercase Text: " + text.toLowerCase());
}

// Get references to the buttons
let originalBtn = document.getElementById("originalBtn");
let capitalBtn = document.getElementById("capitalBtn");
let smallBtn = document.getElementById("smallBtn");

// Add event listeners to the buttons
originalBtn.addEventListener("click", showOriginalText);
capitalBtn.addEventListener("click", showCapitalLetters);
smallBtn.addEventListener("click", showSmallLetters);
