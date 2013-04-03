(function($) {

  // One object per question.

  var questionOne = function() {
    var a = 3,
        b = 5;
    $('.question-one').text(a+b);
  };

  var questionTwo = function() {
    alert("Hello world!");
  };

  var questionThree = function() {
    $('.question-three').text("Hello World!");
  };

  var questionFour = function() {
    $(document).ready(function(){
      $('p').hide().fadeIn(3000);
    });
  };

  var questionFive = function() {
    var name = prompt("What is your name?", "Enter name here");
    $('.question-five').text("Hello " + name + ".");
  };

  var questionSix = function() {
    var economists = [
      "Taylor",
      "Mankiw",
      "Roubini",
      "Krugman"
    ];
    $.each(economists, function(index, economist) {
      $(".question-six").append("<li>" + economist + "</li>");
    });
  };

  var questionSeven = function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    $(".question-seven").text(month + '/' + day + '/' + year);
  };

  var questionEight = {
    print: function(string) {
      $('.question-eight').text(string);
    }
  };

  var questionNine = {
    questionLineOne: "Create a test that asks three questions through dialog boxes.  If the test taker answers correctly, notify them with a dialog box that says \"Correct\"; otherwise, notify them with a dialog box that says \"Incorrect, there are XX moons\".  Here are the questions and answers:How many moons does Earth have? 1",
    questionLineTwo: "How many moons does Saturn have? 31",
    quetsionLineThree: "How many moons does Venus have? 0"
  };

  // Intrusive solutions have been commented out allowing one to
  // trigger each individually.

  questionOne();
  // questionTwo();
  questionThree();
  questionFour();
  // questionFive();
  questionSix();
  questionSeven();
  questionEight.print("Hello question eight!");
  questionNine();

})(jQuery);
