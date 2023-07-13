var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

$("body").on("keypress", nextSequence);

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);

  $(this).fadeOut(100).fadeIn(100);
  new Audio("./sounds/" + userChosenColor + ".mp3").play();

  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  $("#level-title").html("Level " + ++level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  new Audio("./sounds/" + randomChosenColor + ".mp3").play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setInterval(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  //   var i = 0;
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
  }
  if (userClickedPattern.length == gamePattern.length) {
    setTimeout(() => {
      nextSequence();
    }, 1000);
    userClickedPattern.length = 0;
  }
}
