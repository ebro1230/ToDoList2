let i = 0;
const addTask = () => {
    i++;
    createDiv(i);

}
const createDiv = (i) => {
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
    deleteButton.setAttribute('type','button');
    newTask.setAttribute('id', i);;
    inputArea.appendChild(inputText);
    buttonArea.appendChild(confirmButton);
    buttonArea.appendChild(deleteButton);
    newTask.appendChild(inputArea);
    newTask.appendChild(buttonArea);
    document.getElementById('tasks').appendChild(newTask);
}
