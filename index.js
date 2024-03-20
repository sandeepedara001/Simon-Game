var colorArr = ["green", "red", "yellow", "blue"];
var level = 0;
var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
}

function checkPatterns(currentColour) {

  if (gamePattern[currentColour - 1] != userClickedPattern[currentColour - 1]) {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over")
    }, 200);
    startOver();
  }
  else {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        userClickedPattern = [];
        nextSequence();
      }, 1000);
    }
  }
};

function nextSequence() {

  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  chosenRandomColor = colorArr[randomNumber];
  gamePattern.push(chosenRandomColor);
  var buttonChosen = $("div." + chosenRandomColor);
  buttonChosen.fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenRandomColor);

  console.log(gamePattern);
  console.log(userClickedPattern);

}

$("div.btn").on("click", function() {
  userClickedButton = $(this).attr("id");
  userClickedPattern.push(userClickedButton);
  animatePress(userClickedButton);
  playSound(userClickedButton);
  checkPatterns(userClickedPattern.length);
});




$(document).on("keypress", function() {
  if (!gameStarted) {
      $("h1").text("Level " + level);
      nextSequence();
      gameStarted = true;
    }
});



function playSound(name) {
  var sound = new Audio('sounds/' + name + '.mp3');
  sound.play();
};

function animatePress(color) {
  currentButton = $("div." + color);
  currentButton.addClass("pressed");
  setTimeout(function() {
    currentButton.removeClass("pressed");
  }, 100);
};


// var greenButton = $("div.green").on("click", function() {
//   userClickedButton = this.id;
//   userClickedPattern.push(userClickedButton);
// });
// var blueButton = $("div.blue").on("click", function() {
//   userClickedButton = this.id;
//   userClickedPattern.push(userClickedButton);
// });
// var yellowButton = $("div.yellow").on("click", function() {
//   userClickedButton = this.id;
//   userClickedPattern.push(userClickedButton);
// });
// var redButton = $("div.red").on("click", function() {
//   userClickedButton = this.id;
//   userClickedPattern.push(userClickedButton);
//   console.log(userClickedPattern);
//
// });
// console.log(userClickedPattern);


// var generatedRandomNumberList = [];
//
// var level = 1;

// while (level != 3) {
//   var randomNumber = Math.floor(Math.random() * 4);
//   console.log("chosen color is " + colorArr[randomNumber]);
//
//   console.log("Before");
//   currentButton = $("div." + colorArr[randomNumber]);
//   currentButton.addClass("pressed");
//   setTimeout(function() {
//     currentButton.removeClass("pressed");
//     console.log("After");
//
//     generatedRandomNumberList.push(randomNumber);
//     console.log(generatedRandomNumberList);
//     level += 1;
//   }, 100);
//
//
// }
