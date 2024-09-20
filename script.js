const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];

// Função para renderizar a lista de tarefas
function renderTasks() {
    taskList.innerHTML = ''; // Limpa a lista atual
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.textContent = tasks[i];

        // Botão para remover tarefa
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove';
        removeButton.onclick = () => removeTask(i);

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
}

// Função para adicionar tarefa
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = ''; // Limpa o input
        renderTasks(); // Atualiza a lista
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}

// Função para remover tarefa
function removeTask(index) {
    tasks.splice(index, 1); // Remove a tarefa pelo índice
    renderTasks(); // Atualiza a lista
}

// Eventos
addTaskButton.onclick = addTask;
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
