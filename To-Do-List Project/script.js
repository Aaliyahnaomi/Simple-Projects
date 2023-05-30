
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodoItem(event) {
  event.preventDefault();
  const task = input.value;

  if (task) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    });

    const taskText = document.createElement('span');
    taskText.innerText = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    input.value = '';
  }
}

// Event listener for form submission
form.addEventListener('submit', addTodoItem);
