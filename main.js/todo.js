const currentUserEmail = localStorage.getItem('currentUser');
if (!currentUserEmail) window.location.href = 'index.html';
const users = JSON.parse(localStorage.getItem('users')) || [];
const currentUser = users.find(u => u.email === currentUserEmail);
document.getElementById('username').textContent = currentUser?.username || "User";
class Todo {
  constructor(task, completed = false) {
    this.id = Date.now();
    this.task = task;
    this.completed = completed;
  }
}
function getTasks() {
  return JSON.parse(localStorage.getItem(`tasks_${currentUserEmail}`)) || [];
}
function saveTasks(tasks) {
  localStorage.setItem(`tasks_${currentUserEmail}`, JSON.stringify(tasks));
}
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addBtn');
const taskList = document.getElementById('task-list');
const logoutBtn = document.getElementById('logout');
function renderTasks() {
  const tasks = getTasks();
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = "task";
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.task}</span>
      <div class="actions">
        <button class="complete">${task.completed ? "Undo" : "Complete"}</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    li.querySelector('.complete').addEventListener('click', () => {
      task.completed = !task.completed;
      saveTasks(tasks);
      renderTasks();
    });
    li.querySelector('.edit').addEventListener('click', () => {
      const newTask = prompt("Edit task:", task.task);
      if (newTask) {
        task.task = newTask;
        saveTasks(tasks);
        renderTasks();
      }
    });
    li.querySelector('.delete').addEventListener('click', () => {
      const updatedTasks = tasks.filter(t => t.id !== task.id);
      saveTasks(updatedTasks);
      renderTasks();
    });
    taskList.appendChild(li);
  });
}
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (!text) {
    alert(" Please enter a task!");
    return;
  }
  const tasks = getTasks();
  tasks.push(new Todo(text));
  saveTasks(tasks);
  taskInput.value = "";
  renderTasks();
});
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
});
renderTasks();