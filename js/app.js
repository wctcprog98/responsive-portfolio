var names = "";
var email = "";
var message = '';

$(document).ready(function() {

  $(".form-group").submit(function (e) {

    //prevent Default functionality
    e.preventDefault();
    names = $("#names").val();
    email = $("#email").val();
    message = $("#message").val();
    console.log("submitted"); 
  });
  
});

  


 

