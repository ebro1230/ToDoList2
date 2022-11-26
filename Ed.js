let i = 0;
class Tasks {
    constructor (id) {
        this.id = id;
        this.taskText = '';
        this.isCompleted = false;
    }
}
let taskArray =[];
let taskArrayJSON;
addEventListener("load", (event) => {
let oldTasksJSON = localStorage.getItem('Tasks');
if (oldTasksJSON !== null) {
    let oldTasks = JSON.parse(oldTasksJSON);
    oldTasks.forEach (task => {
    i++;
    task.id = i;
    taskArray.push(task);
    taskArrayJSON = JSON.stringify(taskArray);
    localStorage.setItem('Tasks', taskArrayJSON);
    const newTask = document.createElement('div');
    newTask.classList.add('row');
    newTask.setAttribute('id', i);
          
    const checkBoxArea = document.createElement('div');
    checkBoxArea.classList.add('col-1');
    checkBoxArea.classList.add('form-check');
    checkBoxArea.setAttribute('id', 'cBA'+i);

    const inputArea = document.createElement('div');
    inputArea.classList.add('form-group');
    inputArea.classList.add('col-10');
    inputArea.classList.add('col-sm-11');
    inputArea.classList.add('col-md-8');
    inputArea.classList.add('col-lg-8');
    inputArea.setAttribute('id', 'iA'+i);

    const inputText = document.createElement('textarea');
    inputText.classList.add("form-control");
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', task.taskText);
    inputText.setAttribute('id', 'it'+i);
    inputText.classList.add('text-wrap');
    inputText.classList.add("rows","1");
    inputText.setAttribute('readonly', '');

    const buttonArea = document.createElement('div');
    buttonArea.classList.add('col-xl-3');
    buttonArea.classList.add('col-lg-3');
    buttonArea.classList.add('col-md-3');
    buttonArea.classList.add('col-sm-4');
    buttonArea.classList.add('col-6');
    buttonArea.classList.add('buttons');
    buttonArea.setAttribute('id', 'bA'+i);

    const confirmButton = document.createElement('button');
    confirmButton.classList.add("btn");
    confirmButton.classList.add("btn-primary");
    confirmButton.innerHTML = "Edit";
    confirmButton.setAttribute('type','button');
    confirmButton.setAttribute('id', 'cb'+i);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute('type','button');
    deleteButton.setAttribute('id', 'db'+i);

    const checkButton = document.createElement('input')
    checkButton.classList.add('form-check-input');
    checkButton.setAttribute('type', 'checkbox');
    checkButton.setAttribute('id', 'cbb'+i);
    checkButton.setAttribute('value', "");


    checkBoxArea.appendChild(checkButton);
    inputArea.appendChild(inputText);
    buttonArea.appendChild(confirmButton);
    buttonArea.appendChild(deleteButton);
    newTask.appendChild(checkBoxArea);
    newTask.appendChild(inputArea);
    newTask.appendChild(buttonArea);
    document.getElementById('tasks').appendChild(newTask);

    let textChange = document.getElementById("it"+i);
    textChange.value = task.taskText;
    let firstButton = document.getElementById("cb"+i);
    if (task.isCompleted === true) {
        textChange.style.textDecoration = "line-through";
        textChange.style.fontStyle = "italic";
        firstButton.setAttribute('disabled',"");
        textChange.style.color = "grey";
        textChange.style.opacity = 0.7;
        checkButton.setAttribute('checked', "");
    }
    else{
        textChange.style.fontStyle = "normal";
        textChange.style.textDecoration = "none";
        firstButton.removeAttribute('disabled',"");
        textChange.style.color = "black";
        textChange.style.opacity = 1;
    }
});
}
});

    document.addEventListener('click', (e) => {
        let elementId = e.target.id;
        let num = elementId.charAt(elementId.length-1);
        if (e.target.innerHTML === 'Confirm'){
            const buttonChange = document.getElementById("cb"+num);
            buttonChange.classList.replace('btn-success', 'btn-primary');
            buttonChange.innerHTML = 'Edit';
            const textChange = document.getElementById("it"+num);
            textChange.setAttribute('readonly',"");
            const buttonEnable = document.querySelector(".btn-dark");
            buttonEnable.removeAttribute('disabled',"");
            document.querySelectorAll('button.btn-primary').forEach(elem => {
               let editButtonId = elem.id;
               let num = editButtonId.charAt(editButtonId.length-1);
               if(document.getElementById("cbb"+num).checked === false) {
                elem.disabled = false;
               }
               else{
                elem.disabled = true;
               }
            });
            document.querySelectorAll('.form-check-input').forEach(elem => {
                elem.disabled = false;
             });
             taskArray.forEach(task => {
                if (task.id == num){
                    task.taskText = textChange.value;
                    taskArrayJSON = JSON.stringify(taskArray); 
                    localStorage.setItem('Tasks', taskArrayJSON);       
                }
            });
            
        }
        else if (e.target.innerHTML === 'Edit') {
            let buttonId = "cb"+num;
            let inputTextId = "it"+num;
            const buttonChange2 = document.getElementById(buttonId);
            buttonChange2.classList.replace('btn-primary', 'btn-success');
            buttonChange2.innerHTML = 'Confirm';
            const textChange2 = document.getElementById(inputTextId);
            textChange2.removeAttribute('readonly',"");
            document.querySelectorAll('button.btn-primary').forEach(elem => {
                elem.disabled = true;
            });
            document.querySelectorAll('.form-check-input').forEach(elem => {
                elem.disabled = true;
            });
            const buttonDisable = document.querySelector(".btn-dark");
            buttonDisable.setAttribute('disabled',"");
            const input = document.getElementById('it'+num);
            input.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    const buttonChange = document.getElementById("cb"+num);
                    buttonChange.classList.replace('btn-success', 'btn-primary');
                    buttonChange.innerHTML = 'Edit';
                    const textChange = document.getElementById("it"+num);
                    textChange.setAttribute('readonly',"");
                    const buttonEnable = document.querySelector(".btn-dark");
                    buttonEnable.removeAttribute('disabled',"");
                    document.querySelectorAll('button.btn-primary').forEach(elem => {
                       let editButtonId = elem.id;
                       let num = editButtonId.charAt(editButtonId.length-1);
                       if(document.getElementById("cbb"+num).checked === false) {
                        elem.disabled = false;
                       }
                       else {
                            elem.disabled = true;
                       }
                    });
                    document.querySelectorAll('.form-check-input').forEach(elem => {
                        elem.disabled = false;
                    });
                    taskArray.forEach(task => {
                        if (task.id == num){
                            task.taskText = textChange.value;
                            taskArrayJSON = JSON.stringify(taskArray);
                            localStorage.setItem('Tasks', taskArrayJSON);        
                        }
                    });
                }
            });
        }
        else if (e.target.innerHTML === 'Delete') {
            const deleteTask = document.getElementById(num);
            taskArray.splice(taskArray.findIndex(task => task.id == num),1);
            taskArrayJSON = JSON.stringify(taskArray);
            localStorage.setItem('Tasks', taskArrayJSON);
            deleteTask.remove();
            const buttonEnable2 = document.querySelector(".btn-dark");
            buttonEnable2.removeAttribute('disabled',"");

        }
        else if (e.target.innerHTML === 'Add Task') {
            i++;
            taskArray.push(new Tasks(i));
            taskArrayJSON = JSON.stringify(taskArray);
            localStorage.setItem('Tasks', taskArrayJSON);
            const newTask = document.createElement('div');
            newTask.classList.add('row');
            newTask.setAttribute('id', i);
            
            const checkBoxArea = document.createElement('div');
            checkBoxArea.classList.add('col-1');
            checkBoxArea.classList.add('form-check');
            checkBoxArea.setAttribute('id', 'cBA'+i);

            const inputArea = document.createElement('div');
            inputArea.classList.add('form-group');
            inputArea.classList.add('col-10');
            inputArea.classList.add('col-sm-11');
            inputArea.classList.add('col-md-8');
            inputArea.classList.add('col-lg-8');
            inputArea.setAttribute('id', 'iA'+i);

            const inputText = document.createElement('textarea');
            inputText.classList.add("form-control");
            inputText.setAttribute('type', 'text');
            inputText.setAttribute('placeholder', "New Task");
            inputText.setAttribute('id', 'it'+i);
            inputText.classList.add('text-wrap');
            inputText.classList.add("rows","1");

            const buttonArea = document.createElement('div');
            buttonArea.classList.add('col-xl-3');
            buttonArea.classList.add('col-lg-3');
            buttonArea.classList.add('col-md-3');
            buttonArea.classList.add('col-sm-4');
            buttonArea.classList.add('col-6');
            buttonArea.classList.add('buttons');
            buttonArea.setAttribute('id', 'bA'+i);

            const confirmButton = document.createElement('button');
            confirmButton.classList.add("btn");
            confirmButton.classList.add("btn-success");
            confirmButton.innerHTML = "Confirm";
            confirmButton.setAttribute('type','button');
            confirmButton.setAttribute('id', 'cb'+i);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn');
            deleteButton.classList.add('btn-danger');
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute('type','button');
            deleteButton.setAttribute('id', 'db'+i);

            const checkButton = document.createElement('input')
            checkButton.classList.add('form-check-input');
            checkButton.setAttribute('type', 'checkbox');
            checkButton.setAttribute('id', 'cbb'+i);
            checkButton.setAttribute('value', "");
            checkButton.setAttribute('disabled', "");

            const buttonDisable = document.querySelector(".btn-dark");
            buttonDisable.setAttribute('disabled',"");

            checkBoxArea.appendChild(checkButton);
            inputArea.appendChild(inputText);
            buttonArea.appendChild(confirmButton);
            buttonArea.appendChild(deleteButton);
            newTask.appendChild(checkBoxArea);
            newTask.appendChild(inputArea);
            newTask.appendChild(buttonArea);
            document.getElementById('tasks').appendChild(newTask);

            document.querySelectorAll('button.btn-secondary').forEach(elem => {
                elem.disabled = true;
            });
            document.querySelectorAll('.form-check-input').forEach(elem => {
                elem.disabled = true;
            });
            const input = document.getElementById('it'+i);
            input.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    
                    event.preventDefault();
                    const buttonChange = document.getElementById("cb"+i);
                    buttonChange.classList.replace('btn-success', 'btn-primary');
                    buttonChange.innerHTML = 'Edit';
                    const textChange = document.getElementById("it"+i);
                    textChange.setAttribute('readonly',"");
                    const buttonEnable = document.querySelector(".btn-dark");
                    buttonEnable.removeAttribute('disabled',"");
                    document.querySelectorAll('button.btn-primary').forEach(elem => {
                       let editButtonId = elem.id;
                       let num = editButtonId.charAt(editButtonId.length-1);
                       if(document.getElementById("cbb"+num).checked === false) {
                        elem.disabled = false;
                       }
                       else {
                            elem.disabled = true;
                       }
                    });
                    document.querySelectorAll('.form-check-input').forEach(elem => {
                        elem.disabled = false;
                    });
                    taskArray.forEach(task => {
                        if (task.id == i){
                            task.taskText = textChange.value;
                            taskArrayJSON = JSON.stringify(taskArray);
                            localStorage.setItem('Tasks', taskArrayJSON);        
                        }
                    });
                }
            });
        }
        else if (e.target.type === "checkbox") {
            const textChange = document.getElementById("it"+num);
            const firstButton = document.getElementById("cb"+num);
            if (e.target.checked) {
                textChange.style.textDecoration = "line-through";
                textChange.style.fontStyle = "italic";
                firstButton.setAttribute('disabled',"");
                textChange.style.color = "grey";
                textChange.style.opacity = 0.7;
                taskArray.forEach(task => {
                    if (task.id == num){
                        task.isCompleted = true;
                        taskArrayJSON = JSON.stringify(taskArray);
                        localStorage.setItem('Tasks', taskArrayJSON);        
                    }
                });
            }
            else{
                textChange.style.fontStyle = "normal";
                textChange.style.textDecoration = "none";
                firstButton.removeAttribute('disabled',"");
                textChange.style.color = "black";
                textChange.style.opacity = 1;
                taskArray.forEach(task => {
                    if (task.id == num){
                        task.isCompleted = false;
                        taskArrayJSON = JSON.stringify(taskArray);
                        localStorage.setItem('Tasks', taskArrayJSON);        
                    }
                });
            }
        }
    });


    

