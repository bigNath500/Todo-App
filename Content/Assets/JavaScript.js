const parentNode = document.getElementById("parentNode");
const defaultText = document.createElement("h6");
defaultText.innerHTML = "You do not have any task.";
defaultText.className = "text-center text-muted fw-light";

parentNode.appendChild(defaultText);

// adding task function

const addTaskButton = document.getElementById("addTask");

addTaskButton.onclick = () => {
    const taskNameInput = document.getElementById("taskName").value;
    const taskEl = document.createElement('div');
    taskEl.className = "bg-white border p-2 mt-2 rounded text-muted fs-6 shadow-sm";
    taskEl.innerHTML = taskNameInput;
    parentNode.append(taskEl);
    defaultText.classList.add("d-none")
}