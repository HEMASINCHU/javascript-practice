const pendingSection = document.getElementById("pendingSection");
const completedSection = document.getElementById("completedSection");

pendingSection.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.innerText);
  e.target.style.opacity = "0.5";
});

pendingSection.addEventListener("dragend", (e) => {
  e.target.style.opacity = "1";
});

completedSection.addEventListener("dragover", (e) => {
  e.preventDefault();
});

completedSection.addEventListener("drop", (e) => {
  e.preventDefault();
  const taskText = e.dataTransfer.getData("text/plain");
  const taskElement = document.createElement("div");
  taskElement.classList.add("task", "completed");
  taskElement.textContent = taskText;
  completedSection.appendChild(taskElement);
  e.target.style.opacity = "1";
});
