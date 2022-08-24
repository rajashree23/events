const btn = document.querySelector("button");
const container = document.getElementById("container");
const output = document.getElementById("output");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  setOutputContent(e);
  btn.textContent = "Button clicked!!🌟";
});
container.addEventListener("click", (e) => {
  setOutputContent(e);
  container.classList.add("add-color");
});

function setOutputContent(e) {
  output.textContent += `EVENT PHASE: ${e.eventPhase} Clicked on e.target: ${e.target.tagName} and e.currentTarget:${e.currentTarget.tagName} \n`;
}

