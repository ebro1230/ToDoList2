let i = 0;
const confirmTask = () => {
    const buttonChange = document.querySelector(".btn-success");
    buttonChange.classList.replace('btn-success', 'btn-secondary');
    buttonChange.innerHTML = 'Edit';
    buttonChange.setAttribute('onclick', "editTask()");
    const textChange = document.querySelector(".form-control-plaintext");
    textChange.setAttribute('readonly',"");
}
const editTask = () => {
    const buttonChange2 = document.querySelector(".btn-secondary");
    buttonChange2.classList.replace('btn-secondary', 'btn-success');
    buttonChange2.innerHTML = 'Confirm';
    buttonChange2.setAttribute('onclick', "confirmTask()");
    const textChange2 = document.querySelector(".form-control-plaintext");
    textChange2.removeAttribute('readonly',"");
}
const deleteTask = () => {
    const deleteTask = document.getElementById('0');
    deleteTask.remove();
}
const addTask = () => {
    i++;
    const newTask = document.createElement('div');
    const inputArea = document.createElement('div');
    const inputText = document.createElement('input');
    const buttonArea = document.createElement('div');
    const confirmButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    newTask.classList.add('row');
    inputArea.classList.add('form-group');
    inputArea.classList.add('col-xl-10');
    inputArea.classList.add('col-lg-8');
    inputArea.classList.add('col-med-8');
    inputArea.classList.add('col-sm-8');
    inputText.classList.add("form-control-plaintext");
    buttonArea.classList.add('col');
    buttonArea.classList.add('buttons');
    confirmButton.classList.add("btn");
    confirmButton.classList.add("btn-success");
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    confirmButton.innerHTML = "Confirm";
    deleteButton.innerHTML = "Delete";
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', "New Text");
    confirmButton.setAttribute('type','button');
    confirmButton.setAttribute('onclick', "confirmTask()");
    deleteButton.setAttribute('type','button');
    deleteButton.setAttribute('onclick', "deleteTask()");
    newTask.setAttribute('id', i);;
    inputArea.appendChild(inputText);
    buttonArea.appendChild(confirmButton);
    buttonArea.appendChild(deleteButton);
    newTask.appendChild(inputArea);
    newTask.appendChild(buttonArea);
    document.getElementById('tasks').appendChild(newTask);
}

