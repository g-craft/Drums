var buttons = document.querySelectorAll(".drum");
var sounds = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "snare.mp3",
  k: "kick-bass.mp3",
  l: "crash.mp3"
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onclick);
}

function onclick() {
  var source = sounds[this.innerHTML];
  makeSound(source);
  buttonAnimation(this.innerHTML);
}


document.addEventListener("keydown", function(event) {
  var source = sounds[event.key];
  makeSound(source);
  buttonAnimation(event.key);
})

function makeSound(source) {
  var audio = new Audio("sounds/" + source);
  audio.play();
}

function buttonAnimation(letter) {
  var activeButton = document.querySelector("." + letter);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}



//               // Switch methode
//
// var buttons = document.querySelectorAll(".drum");
// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", onclick);
// }
//
// function onclick() {
//
//   var buttonInnerHTML = this.innerHTML;
//   makeSound(buttonInnerHTML);
//   buttonAnimation(buttonInnerHTML);
// }
//
//
// document.addEventListener("keydown", function(event) {
//   makeSound(event.key);
//   buttonAnimation(event.key);
// });
//
//
// function makeSound(key) {
//
//   switch (key) {
//
//     case "w":
//       var source = "sounds/tom-1.mp3";
//       break;
//
//     case "a":
//       var source = "sounds/tom-2.mp3";
//       break;
//
//     case "s":
//       var source = "sounds/tom-3.mp3";
//       break;
//
//     case "d":
//       var source = "sounds/tom-4.mp3"
//       break;
//
//     case "j":
//       var source = "sounds/snare.mp3";
//       break;
//
//     case "k":
//       var source = "sounds/kick-bass.mp3";
//       break;
//
//     case "l":
//       var source = "sounds/crash.mp3";
//       break;
//
//     default:
//       console.log(buttonInnerHTML);
//   }
//
//   var audio = new Audio(source);
//   audio.play();
// }
//
// function buttonAnimation(letter) {
//   var activeButton = document.querySelector("." + letter);
//   activeButton.classList.add("pressed");
//
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100)
// }
