function createLi() {
    const liTag = document.createElement("li");
    liTag.innerHTML = document.getElementById("inputData").value;
    document.getElementById("inputData").value = "";
    document.getElementById("list").appendChild(liTag);
  
    const btnClose = document.createElement("button");
    btnClose.textContent = "Done";
    btnClose.onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
    document.querySelector("ul>li:last-child").appendChild(btnClose);
    document.querySelector("ul>li:last-child>button").classList.add("btn");
    document.querySelector("ul>li:last-child>button").classList.add("btn-danger");
    document.querySelector("ul>li:last-child>button").classList.add("mx-3");
    document.querySelector("ul>li:last-child>button").classList.add("my-2");
  
    var inputCheckBox = document.createElement("input");
    inputCheckBox.setAttribute("type", "checkbox");
    document.querySelector("ul>li:last-child").appendChild(inputCheckBox);
    inputCheckBox.onclick = function () {
      if (inputCheckBox.checked == true) {
        var div = this.parentElement;
        div.style.background = "green";
      }
      if (inputCheckBox.checked == false) {
          var div = this.parentElement;
          div.style.background = "white";
        }
    };
  }
  