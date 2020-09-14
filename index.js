var noDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}


// document.querySelectorAll("button")[1].addEventListener("click", clicked);
// document.querySelectorAll("button")[2].addEventListener("click", clicked);
// document.querySelectorAll("button")[3].addEventListener("click", clicked);
// document.querySelectorAll("button")[4].addEventListener("click", clicked);
// document.querySelectorAll("button")[5].addEventListener("click", clicked);
// document.querySelectorAll("button")[6].addEventListener("click", clicked);
//
// function clicked(){
//   this.style.color="white";
//   var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// }

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});



function makesound(key) {


  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    default:

  }

}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+ key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed")
    }, 100);
}


// document.addEventListener("keypress",function(event){
//
//   switch (event.key) {
//     case "w":
//       var audio = new Audio('sounds/tom-1.mp3');
//       audio.play();
//       break;
//
//     case "a":
//       var audio = new Audio('sounds/tom-2.mp3');
//       audio.play();
//       break;
//
//     case "s":
//       var audio = new Audio('sounds/tom-3.mp3');
//       audio.play();
//       break;
//
//     case "d":
//       var audio = new Audio('sounds/tom-4.mp3');
//       audio.play();
//       break;
//
//     case "j":
//       var audio = new Audio('sounds/crash.mp3');
//       audio.play();
//       break;
//
//     case "k":
//       var audio = new Audio('sounds/kick-bass.mp3');
//       audio.play();
//       break;
//
//     case "l":
//       var audio = new Audio('sounds/snare.mp3');
//       audio.play();
//       break;
//     default:
//
//   }
//
//   });
//
//   //console.log(event.key);
