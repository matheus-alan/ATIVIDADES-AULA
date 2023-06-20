window.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTask);
  });
  
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    // Cria um novo elemento de lista (li)
    var newTask = document.createElement("li");
  
    // Define o texto do elemento de lista como o valor do input
    newTask.innerText = taskInput.value;
  
    // Adiciona o novo elemento de lista à lista de tarefas
    taskList.appendChild(newTask);
  
    // Limpa o valor do input
    taskInput.value = "";
  }
  