
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

$(document).ready(function() {
  console.log("ready!");
  function typeWriter() {
    if (i < txt.length) {
      $("#app").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  $(".btn").click(function () {
    console.log("clicked");
    
  });
});
$(document).ready(function () {
  // Listen to submit event on the <form> itself!
  $('#main').submit(function (e) {

    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();

    $.post("process.php", {
      name: name,
      email: email
    }).complete(function() {
        console.log("Success");
      });
  });
});

  


 

