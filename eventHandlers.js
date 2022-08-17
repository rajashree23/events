const btn = document.querySelector('button');


btn.addEventListener('click', changeText);

btn.removeEventListener('click', changeText);


function changeText(){
  console.log('hey')
  btn.textContent="Button clicked!!🌟";
}