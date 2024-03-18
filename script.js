const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
  const todoText = todoInput.value;
  if (todoText) {
    // Create a new list item
    const listItem = document.createElement("li");

    // Create a span element for the todo text
    const todoSpan = document.createElement("span");
    todoSpan.textContent = todoText;

    // Create a button element to remove the todo
    const removeButton = document.createElement("button");
    removeButton.textContent = "Hapus";
    removeButton.addEventListener("click", function() {
      todoList.removeChild(listItem);
    });

    // Add the span and button to the list item
    listItem.appendChild(todoSpan);
    listItem.appendChild(removeButton);

    // Add the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = "";
  }
});
