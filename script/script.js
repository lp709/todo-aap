const input = document.querySelector(".input-tarefas");
const button = document.querySelector("#myButton");
const list = document.querySelector(".tarefas ul");

function lp() {
  if (input.value === "") {
    window.alert("Por Favor Digite Uma Tarefa");
    return;
  }

  

  const newList = document.createElement("li");
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "x";

  newList.textContent = input.value;

  newList.addEventListener("click", function () {
    newList.classList.toggle("concluido");
  });

  deleteButton.addEventListener('click', function() {
    newList.remove()
  })

  newList.appendChild(deleteButton);
  
  list.appendChild(newList);

  input.value = "";

  
}

localStorage.setItem("tarefa", input.value)
const tarefasGuardada = localStorage.getItem("tarefa");

button.addEventListener("click", lp);
