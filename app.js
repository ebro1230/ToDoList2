/* Disable and active submit button */
const inputedTask = document.getElementById("groceries-input");

inputedTask.addEventListener("input", () => {
  const inputButton = document.querySelector("#g-addItemButton");
  inputButton.disabled = false;
});

const form = document.getElementById("groceries-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/* Adding a task from the form */

const addItemButton = document.querySelector("#g-addItemButton");
const toDoList = document.querySelector(".g-todo-list");

addItemButton.addEventListener("click", (e) => {
  e.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("g-todo");

  const newToDo = document.createElement("li");
  newToDo.innerHTML = inputedTask.value;
  newToDo.classList.add("g-todo-item");
  newToDo.style.textDecoration = "none";
  newToDo.style.display = "inline";
  newToDo.style.fontSize = "22px";
  newToDo.style.marginRight = "auto";
  newToDo.style.marginBottom = "5px";
  toDoDiv.appendChild(newToDo);

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("g-edit-button");
  editButton.style.fontSize = "14px";
  editButton.style.border = "1px solid";
  editButton.style.borderRadius = "5px";
  editButton.style.marginRight = "5px";
  editButton.style.marginBottom = "5px";
  toDoDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("g-delete-button");
  deleteButton.style.fontSize = "14px";
  deleteButton.style.border = "1px solid";
  deleteButton.style.borderRadius = "5px";
  deleteButton.style.marginRight = "5px";
  deleteButton.style.marginBottom = "5px";
  //editButton.style.backgroundColor = "green";
  toDoDiv.appendChild(deleteButton);

  toDoList.appendChild(toDoDiv);

  inputedTask.value = "";

  // Edit task
  editButton.addEventListener("click", () => {
    if (editButton.innerHTML === "Edit") {
      newToDo.contentEditable = true;
      newToDo.focus();
      editButton.innerText = "Save";
      editButton.style.backgroundColor = "yellow";
      newToDo.style.textDecoration = "none";
    } else {
      newToDo.contentEditable = false;
      editButton.innerText = "Edit";
      editButton.style.backgroundColor = "transparent";
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
