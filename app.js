/* Disable and active submit button */
const inputedTask = document.getElementById("groceries-input");

inputedTask.addEventListener("input", (e) => {
  const inputButton = document.querySelector("#g-addItemButton");
  inputButton.disabled = false;
});

const form = document.getElementById("groceries-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/* Adding a task from the form */

let tasksList = JSON.parse(localStorage.getItem("tasks")) || [
  { id: 1, taskName: "Grocery", isDone: false },
];
// localStorage.setItem("objects", JSON.stringify(tasksList));

const addItemButton = document.querySelector("#g-addItemButton");
const toDoList = document.querySelector(".g-todo-list");
// const renderOnTheScreen = () => {
//   console.log("render");
//   const temp = `<li> ${tasksList[0].taskName} <button>DELETE</button> </>`;
//   const list = document.getElementById("g-todo-list");
//   list.innerHTML = list.value;
// };

addItemButton.addEventListener("click", (e) => {
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

  const doneButton = document.createElement("button");
  doneButton.innerHTML = "Shopping status";
  doneButton.classList.add("g-done-button");
  doneButton.style.fontSize = "14px";
  doneButton.style.backgroundColor = "lightgreen";
  doneButton.style.border = "1px solid";
  doneButton.style.borderRadius = "5px";
  doneButton.style.marginRight = "5px";
  doneButton.style.marginBottom = "5px";
  toDoDiv.appendChild(doneButton);

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

  let task1 = {
    id: tasksList.length,
    taskName: newToDo.innerText,
    isDone: false,
  };
  tasksList.push(task1);
  console.log(tasksList);

  // Storing information in Local Storage
  localStorage.setItem("tasks", JSON.stringify(tasksList));

  // Done task
  doneButton.addEventListener("click", () => {
    if (confirm("Have you already bought this item?")) {
      doneButton.innerHTML = "Checked!";
      doneButton.style.backgroundColor = "green";
      newToDo.style.textDecoration = "line-through";
      task1.isDone = true;
    } else {
    }

    localStorage.setItem("tasks", JSON.stringify(tasksList));
  });

  // Edit task
  editButton.addEventListener("click", (e) => {
    console.log(e.target);
    if (editButton.innerHTML === "Edit") {
      newToDo.contentEditable = true;
      // newToDo.focus();
      editButton.innerText = "Save";
      editButton.style.backgroundColor = "yellow";
      newToDo.style.textDecoration = "none";
    } else {
      newToDo.contentEditable = false;
      editButton.innerText = "Edit";
      editButton.style.backgroundColor = "transparent";
      task1.taskName = newToDo.innerText;
      // console.log(tasksList);
    }
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  });

  // Delete task
  deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      newToDo.remove();
      doneButton.remove();
      editButton.remove();
      deleteButton.remove();
      tasksList.splice(tasksList.findIndex((num) => num === task1.id));
    } else {
    }
    localStorage.setItem("objects", JSON.stringify(tasksList));
  });
});
