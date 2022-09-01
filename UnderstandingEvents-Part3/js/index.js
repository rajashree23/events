import { tasks } from "./tasks.js";
const list = document.getElementById("task-list");
const count = document.getElementById("display-count");
var taskCount = tasks.length;

function renderList() {
  list.innerHTML = tasks
    .map((task) => {
      return `<li>${task.task}</li>`;
    })
    .join("");
}
renderList();

function displayCount() {
  count.innerHTML = `Total tasks remaining: ${taskCount}`;
}
displayCount();

list.addEventListener("click", (e) => {
  if (taskCount > 0 && !e.target.classList.contains("completed")) {
    e.target.classList.add("completed");
    let event = new CustomEvent("updateTaskCount", {
      detail: {
        purpose: "changing task count",
      },
    });
    list.dispatchEvent(event);
  } else {
    list.removeEventListener("click", () => {
      console.log("No tasks remaining");
    });
  }
});

list.addEventListener("updateTaskCount", (e) => {
  taskCount--;
  console.log(e.detail);
  displayCount();
});
