var progressBar = require(progressbar.js); 

var bar = new ProgressBar.Line('#progressBar', {easing: 'easeInOut'});
bar.animate(1);  // Value from 0.0 to 1.0