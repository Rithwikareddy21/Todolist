document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

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
        `;
        taskList.appendChild(li);
    });
}

function completeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (!tasks[index].completed) {
        tasks[index].completed = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    loadGoal();
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

// Load Tasks
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

// Complete Task
function completeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (!tasks[index].completed) {
        tasks[index].completed = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
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
//  console.log(localStorage.getItem("tasks"));
// console.log(JSON.parse(localStorage.getItem("tasks"))); 



