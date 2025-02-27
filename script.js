document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

// Add Task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
}

// Load Active Tasks
function loadTasks() {
    let taskList = document.getElementById("taskList");
    if (!taskList) return;

    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="completeTask(${index})" class="styled-btn">✔️ Done</button>
            <button onclick="deleteTask(${index})" class="styled-btn delete-btn">❌ Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Complete Task & Move to Completed Tasks List
function completeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

    let task = tasks[index];
    task.completed = true;

    // Move the task to completedTasks list and remove from tasks list
    completedTasks.push(task);
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

    loadTasks();
}

// Delete Task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

// Clear All Tasks
function clearTasks() {
    localStorage.removeItem("tasks");
    loadTasks();
}

// View Completed Tasks Page
function viewCompletedTasks() {
    window.location.href = "completed.html";
}
