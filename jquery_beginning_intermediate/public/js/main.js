(function($) {

  var questionOne = function() {
    var a = 3,
        b = 5;
    document.write("<p>" + (a + b) + "</p>");
  };

  var questionTwo = function() {
    alert("Hello world!");
  };

  var questionThree = function() {
    document.write("<p>Hello World!</p>");
  };

  var questionFour = function() {
    $(document).ready(function(){
      $('p').hide().fadeIn(3000);
    });
  };

  var questionFive = function() {
    var name = prompt("What is your name?", "Enter name here");
    document.write("<p>Hello " + name + ".</p>");
  };

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();

})(jQuery);
