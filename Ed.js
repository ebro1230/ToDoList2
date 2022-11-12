let i = 0;

    document.addEventListener('click', (e) => {
        let elementId = e.target.id;
        let num = elementId.charAt(elementId.length-1);
        if (e.target.innerHTML === 'Confirm'){
            const buttonChange = document.getElementById("cb"+num);
            buttonChange.classList.replace('btn-success', 'btn-secondary');
            buttonChange.innerHTML = 'Edit';
            buttonChange.setAttribute('onclick', "editTask()");
            const textChange = document.getElementById("it"+num);
            textChange.setAttribute('readonly',"");
            const buttonEnable = document.querySelector(".btn-dark");
            buttonEnable.removeAttribute('disabled',"");
            document.querySelectorAll('button.btn-secondary').forEach(elem => {
               elem.disabled = false;
            });
        }
        else if (e.target.innerHTML === 'Edit') {
            let buttonId = "cb"+num;
            let inputTextId = "it"+num;
            const buttonChange2 = document.getElementById(buttonId);
            buttonChange2.classList.replace('btn-secondary', 'btn-success');
            buttonChange2.innerHTML = 'Confirm';
            buttonChange2.setAttribute('onclick', "confirmTask()");
            const textChange2 = document.getElementById(inputTextId);
            textChange2.removeAttribute('readonly',"");
            document.querySelectorAll('button.btn-secondary').forEach(elem => {
                elem.disabled = true;
            });
            const buttonDisable = document.querySelector(".btn-dark");
            buttonDisable.setAttribute('disabled',"");
        }
        else if (e.target.innerHTML === 'Delete') {
            const deleteTask = document.getElementById(num);
            deleteTask.remove();
            const buttonEnable2 = document.querySelector(".btn-dark");
            buttonEnable2.removeAttribute('disabled',"");
        }
        else if (e.target.innerHTML === 'Add Task') {
            i++;
            const newTask = document.createElement('div');
            newTask.classList.add('row');
            newTask.setAttribute('id', i);
            
            const checkBoxArea = document.createElement('div');
            checkBoxArea.classList.add('col2');
            checkBoxArea.classList.add('form-check');
            checkBoxArea.setAttribute('id', 'cBA'+i);

            const inputArea = document.createElement('div');
            inputArea.classList.add('form-group');
            inputArea.classList.add('col-xl-8');
            inputArea.classList.add('col-lg-8');
            inputArea.classList.add('col-med-8');
            inputArea.classList.add('col-sm-8');
            inputArea.setAttribute('id', 'iA'+i);

            const inputText = document.createElement('input');
            inputText.classList.add("form-control-plaintext");
            inputText.setAttribute('type', 'text');
            inputText.setAttribute('placeholder', "New Task");
            inputText.setAttribute('id', 'it'+i);

            const buttonArea = document.createElement('div');
            buttonArea.classList.add('col');
            buttonArea.classList.add('buttons');
            buttonArea.setAttribute('id', 'bA'+i);

            const confirmButton = document.createElement('button');
            confirmButton.classList.add("btn");
            confirmButton.classList.add("btn-success");
            confirmButton.innerHTML = "Confirm";
            confirmButton.setAttribute('type','button');
            confirmButton.setAttribute('onclick', "confirmTask()");
            confirmButton.setAttribute('id', 'cb'+i);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn');
            deleteButton.classList.add('btn-danger');
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute('type','button');
            deleteButton.setAttribute('onclick', "deleteTask()");
            deleteButton.setAttribute('id', 'db'+i);

            const checkButton = document.createElement('button')
            checkButton.classList.add('form-check-input');
            checkButton.setAttribute('type', 'checkbox');
            checkButton.setAttribute('id', "flexCheckDefault");
            checkButton.setAttribute('value', "");

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
        }
    });
const confirmTask = () => {}
const editTask = () => {}
const deleteTask = () => {}
const addTask = () => {}
    

