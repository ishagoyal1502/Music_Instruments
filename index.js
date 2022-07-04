var drum=document.querySelectorAll(".drum").length;
for(var i=0;i<drum;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    sound(this.innerHTML);
    animation(this.innerHTML);
  })
}
document.addEventListener("keydown",function(event){
  sound(event.key);
  animation(event.key);
})
function sound(key)
{
  switch(key)
  {
    case "w":var music=new Audio("sounds/crash.mp3");
            break;
    case "a":var music=new Audio("sounds/kick-bass.mp3");
            break;
    case "s":var music=new Audio("sounds/snare.mp3");
            break;
    case "d":var music=new Audio("sounds/tom-1.mp3");
            break;
    case "j":var music=new Audio("sounds/tom-2.mp3");
            break;
    case "k":var music=new Audio("sounds/tom-3.mp3");
            break;
    case "l":var music=new Audio("sounds/tom-4.mp3");
            break;
    default:break;
  }
  music.play();
}

function animation(key)
{
  document.querySelector("."+ key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+ key).classList.remove("pressed");
  },100);
}
