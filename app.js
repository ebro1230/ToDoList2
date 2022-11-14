/* Disable and active submit button */
const inputedTask = document.getElementById("groceries-input");

inputedTask.addEventListener("input", () => {
  const inputButton = document.querySelector("#addItemButton");
  inputButton.disabled = false;
});

const form = document.getElementById("groceries-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/* Adding a task from the form */

const addItemButton = document.querySelector("#addItemButton");
const toDoList = document.querySelector(".todo-list");

addItemButton.addEventListener("click", (e) => {
  e.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  const newToDo = document.createElement("li");
  newToDo.innerHTML = inputedTask.value;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("edit-button");
  toDoDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  toDoDiv.appendChild(deleteButton);

  toDoList.appendChild(toDoDiv);

  inputedTask.value = "";

  // Edit task
  editButton.addEventListener("click", () => {
    if (editButton.innerHTML === "Edit") {
      newToDo.contentEditable = true;
      newToDo.focus();
      editButton.innerText = "Save";
      newToDo.style.textDecoration = "none";
    } else {
      newToDo.contentEditable = false;
      editButton.innerText = "Edit";
    }
  });

  // Delete task
  deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      newToDo.remove();
      editButton.remove();
      deleteButton.remove();
    } else {
    }
  });
});
