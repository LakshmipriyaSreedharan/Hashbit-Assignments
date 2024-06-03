function submitfn(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input value
    const inputValue = document.querySelector('.todo-input').value;

    if (inputValue.trim() !== '') {
        // Create a new todo item
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        // Create span for the task name
        const taskName = document.createElement('span');
        taskName.textContent = inputValue;

        // Create Complete button
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', completeTask);

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('trash-btn');
        deleteButton.addEventListener('click', deleteTask);

        // Append elements to the todo item
        todoItem.appendChild(taskName);
        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);

        // Append todo item to the todo list
        const todoList = document.querySelector('.todo-list');
        todoList.appendChild(todoItem);

        // Clear input value
        document.querySelector('.todo-input').value = '';
    }
}

function completeTask(event) {
    const task = event.target.parentElement;
    task.classList.toggle('completed');
}

function deleteTask(event) {
    const task = event.target.parentElement;
    task.remove();
}
