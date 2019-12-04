
var count = 0; 
var index = 0;
var currentText = '';
var letter = '';

(function type() {
  
  const texts = ['am a Full Stack Web Developer', 'love solving problems', 'beautiful front end design'];
  
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.typing').textContent = letter; 
  
  if (letter.length === currentText.length) {
    count++; 
    index = 0; 
  }
  setTimeout(type, 400); 
}());




 