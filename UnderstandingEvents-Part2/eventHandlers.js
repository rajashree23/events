const btn = document.querySelector("button");
const container = document.getElementById("container");
const output=document.getElementById("output")

btn.addEventListener("click", changeText);
btn.addEventListener("click", changeColor);

//changeColor will only be invoked
//event handler properties
// btn.onclick=changeText;
// btn.onclick=changeColor;


function changeText(e) {
  e.stopPropagation();
  e.target.innerText = "Button clicked!!🌟";
}

function changeColor() {
  btn.style.color = "red";
}
