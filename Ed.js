
 let i = 0;
document.querySelector('#Plus').addEventListener('click', () => {
    i = i + 1;
    let newTaskId = i.toString()
    const newTask = document.createElement('div');
    newTask.classList.add('row');
    newTask.setAttribute('id',newTaskId);
    newTask.innerHTML = '<div class="form-group col-xl-10 col-lg-8 col-med-8 col-sm-8"> <input type="text" class="form-control-plaintext" placeholder="New Task"></div> <div class="col" id="buttons"> <button type="button" class="btn btn-success" id="Confirm-Button">Confirm</button> <button type="button" class="btn btn-danger">Delete</button></div>';
    const tasks = document.getElementById('tasks');
    tasks.appendChild(newTask);

    const inputArea = document.createElement('div');
    inputArea.classList.add('form-group col-xl-10 col-lg-8 col-med-8 col-sm-8');
    const userInput = document.getElementById(newTaskId);
    userInput.appendChild(inputArea);

    const addButtons = document.createElement('div');
    addButtons.classList.add('col');
    addButtons.innerHTML = '<button type="button" class="btn btn-success">Confirm</button> <button type="button" class="btn btn-danger">Delete</button>';
    const buttons = document.getElementById(newTaskId);
    buttons.appendChild(addButtons);
});
document.querySelector('#Confirm-Button').addEventListener('click', () => {
    const buttonChange = document.getElementById('Confirm-Button');
    buttonChange.setAttribute('class','btn btn-secondary');
    buttonChange.innerText = "Edit";
    console.log("hi");
});