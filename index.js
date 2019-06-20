for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

document.addEventListener("keydown", function(event) {
  if (event.key === "w" || event.key === "a" || event.key === "s" || event.key === "d" || event.key === "j" || event.key === "k" || event.key === "l") {
    makeSound(event.key);
    buttonAnimation(event.key);
  }
});

function makeSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.toggle("pressed");
  setTimeout(function() {
    document.querySelector("." + currentKey).classList.toggle("pressed");
  }, 100);
}
