$(".simon-button").click(function() {
  var $this = $(this);
  var currentColor = this.id;
  console.log(currentColor);
  $this.addClass("pressed");
  playSound(currentColor);
  setTimeout(function() {
    $this.removeClass("pressed");
  }, 100);
});


// Sound Effects
var sounds = {
  green: new Audio("sounds/simonSoundGreen.mp3"),
  red: new Audio("sounds/simonSoundRed.mp3"),
  cyan: new Audio("sounds/simonSoundCyan.mp3"),
  yellow: new Audio("sounds/simonSoundYellow.mp3"),
}

function playSound(currentColor) {
  sounds[currentColor].play();
}
