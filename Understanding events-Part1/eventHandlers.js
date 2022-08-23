const btn = document.querySelector('button');

btn.addEventListener('click', changeText);
btn.addEventListener('click', changeColor);
// btn.removeEventListener('click', changeColor);
// btn.onclick=changeText;
// btn.onclick=changeColor;

function changeText(){
  btn.textContent="Button clicked!!🌟";
  btn.style.color='red'
}

function changeColor(){
  btn.style.color='red'
}