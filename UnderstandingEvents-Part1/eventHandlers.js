const btn = document.querySelector('button');

btn.addEventListener('click', changeText);
btn.addEventListener('click', changeColor);
// btn.removeEventListener('click', changeColor);

function changeText(){
  btn.textContent="Button clicked!!🌟";
}

function changeColor(){
  btn.style.color='red'
}