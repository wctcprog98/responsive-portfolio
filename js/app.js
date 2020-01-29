//typing effect
const texts = ["code ninja", "dreamer", "innovator", "always looking to learn"];
let count = 0; 
let index = 0; 
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0; 
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".change").textContent = letter;
    //compares current letter value and if equal adds to the count which moves to the next index
    if (letter.length === currentText.length) {
        count++; 
        index = 0;
    }
    setTimeout(type, 400);
}());