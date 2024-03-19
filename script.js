document.addEventListener('DOMContentLoaded', function() {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // Load todos from local storage
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Render todos
  function renderTodos() {
      todoList.innerHTML = '';
      todos.forEach(function(todo, index) {
          const li = document.createElement('li');
          li.innerHTML = `
              <span>${todo}</span>
              <div class="actions">
                  <button onclick="editTodo(${index})">Edit</button>
                  <button onclick="deleteTodo(${index})">Delete</button>
              </div>
          `;
          todoList.appendChild(li);
      });
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  renderTodos();

  // Add todo
  todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
          todos.push(todoText);
          renderTodos();
          todoInput.value = '';
      }
  });

  // Delete todo
  window.deleteTodo = function(index) {
      todos.splice(index, 1);
      renderTodos();
  };

  // Edit todo
  window.editTodo = function(index) {
      const newText = prompt('Edit Todo:', todos[index]);
      if (newText !== null) {
          todos[index] = newText.trim();
          renderTodos();
      }
  };
});
