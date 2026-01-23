// js/script.js
let todos = [];

function renderTodos(data = todos) {
    const list = document.getElementById('todo-list');
    
    if (data.length === 0) {
        list.innerHTML = `<tr><td colspan="4" class="p-12 text-center text-gray-500 italic">No tasks found</td></tr>`;
        return;
    }

    list.innerHTML = '';
    data.forEach((item, index) => {
        list.innerHTML += `
        <tr class="border-b border-gray-800">
            <td class="p-4 text-sm">${item.task}</td>
            <td class="p-4 text-sm text-center text-gray-400 font-mono">${item.date}</td>
            <td class="p-4 text-center">
                <span class="bg-[#7d85f5]/20 text-[#7d85f5] px-2 py-1 rounded text-[10px] font-bold">IN PROGRESS</span>
            </td>
            <td class="p-4 text-right">
                <button onclick="deleteTodo(${index})" class="text-red-400 hover:text-red-300 text-xs font-semibold">Delete</button>
            </td>
        </tr>`;
    });
}

function addTodo() {
    const taskInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('todo-date');
    const errorMsg = document.getElementById('error-msg');

    if (!taskInput.value.trim() || !dateInput.value) {
        errorMsg.classList.remove('hidden');
        return;
    }

    errorMsg.classList.add('hidden');
    todos.push({ task: taskInput.value, date: dateInput.value });
    
    taskInput.value = '';
    dateInput.value = '';
    renderTodos();
}

// FITUR SEARCH (Real-time)
function searchTodo() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const filtered = todos.filter(item => 
        item.task.toLowerCase().includes(searchText)
    );
    renderTodos(filtered);
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function deleteAllTodo() {
    if (todos.length > 0 && confirm("Clear all tasks?")) {
        todos = [];
        renderTodos();
    }
}

function filterTodo() {
    // Sort berdasarkan tanggal terdekat
    todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderTodos();
}

renderTodos();