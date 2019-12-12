let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', logKey);

function logKey(event) {
  if(event.code == "ArrowUp"){
      boxTop += 10;
  }
  if(event.code == "ArrowDown"){
      boxTop -= 10;
  }
  if(event.code == "ArrowLeft"){
      boxLeft -= 10;
  }
  if(event.code == "ArrowRight"){
      boxLeft += 10;
  }
  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
}