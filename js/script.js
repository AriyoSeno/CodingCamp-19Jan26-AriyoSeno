let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value === '' || todoDate.value === '') {
        alert('Please enter both a todo item and a due date.');
        return;
    }

    const newTodo = {
        id: Date.now(), // Unique ID untuk hapus
        todo: todoInput.value,
        date: todoDate.value,
        status: 'In Progress'
    };

    todos.push(newTodo);
    todoInput.value = '';
    todoDate.value = '';

    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    
    if (todos.length === 0) {
        todoList.innerHTML = `<tr id="empty-message"><td colspan="4" class="p-10 text-center text-gray-500">No task found</td></tr>`;
        return;
    }

    todoList.innerHTML = '';

    todos.forEach((todo) => {
        todoList.innerHTML += `
        <tr class="border-b border-gray-800 hover:bg-gray-800/50 transition">
            <td class="p-4">${todo.todo}</td>
            <td class="p-4 text-center text-gray-400">${todo.date}</td>
            <td class="p-4 text-center">
                <span class="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">${todo.status}</span>
            </td>
            <td class="p-4 text-right">
                <button onclick="deleteTodo(${todo.id})" class="text-red-400 hover:text-red-600 transition">Delete</button>
            </td>
        </tr>`;
    });
}

function deleteAllTodo() {
    if(confirm("Are you sure you want to delete all tasks?")) {
        todos = [];
        renderTodos();
    }
}

function filterTodo() {
    alert("Filter function coming soon!");
}