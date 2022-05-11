var but = document.querySelectorAll(".drum");
function callSound(temp){
  switch (temp) {
    case 'w':
      console.log(temp);
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case 'a':
      console.log(temp);
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case 's':
      console.log(temp);
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case 'd':
      console.log(temp);
      sound = new Audio("sounds/tom-4.mp3");

      break;
    case 'j':
      console.log(temp);
      sound = new Audio("sounds/snare.mp3");

      break;
    case 'k':
      console.log(temp);
      sound = new Audio("sounds/crash.mp3");

      break;
    case 'l':
      console.log(temp);
      sound = new Audio("sounds/kick-bass.mp3");
      break;

    default:
      return;
    }

  sound.play()

}

for (var i = 0; i < but.length; i++) {

  but[i].addEventListener("click",function(){
    temp = this.innerHTML;
    callSound(temp);
    buttonAnim(temp);




  });
}

document.addEventListener('keypress',function(event){

  callSound(event.key);
  console.log(event.key);
  buttonAnim(temp)

})
function buttonAnim(temp){
  return

}
