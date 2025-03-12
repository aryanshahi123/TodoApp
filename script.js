'use strict';

let todocontainer = document.querySelector('.todo-list');
let todoTextBox = document.getElementById("todo");

window.onload = function () {
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(todo => createTodoElement(todo.todoTask, todo.checked));
};

function createTodoElement(todoText, isChecked) {
    let newLi = document.createElement("li");
    if (isChecked) newLi.classList.add("chosen");

    let newp = document.createElement("p");
    newp.innerHTML = todoText;
    newLi.append(newp);

    let newspan = document.createElement("span");
    newspan.innerHTML = 'X';
    newLi.append(newspan);

    todocontainer.append(newLi);
}

function addTodo() {
    if (todoTextBox.value === '') {
        alert("Empty Todo Cannot Be Added.");
    } else {
        let todoText = todoTextBox.value;
        let todos = JSON.parse(localStorage.getItem("todos")) || [];

        let newTodo = { todoTask: todoText, checked: false };
        todos.push(newTodo);

        localStorage.setItem("todos", JSON.stringify(todos));
        createTodoElement(todoText, false);
    }
    todoTextBox.value = '';
}

todocontainer.addEventListener("click", (hit) => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    if (hit.target.tagName === "P") {
        let parentLi = hit.target.parentElement;
        parentLi.classList.toggle("chosen");

        let index = Array.from(todocontainer.children).indexOf(parentLi);
        todos[index].checked = parentLi.classList.contains("chosen");
        localStorage.setItem("todos", JSON.stringify(todos));
    } else if (hit.target.tagName === "SPAN") {
        let parentLi = hit.target.parentElement;
        let index = Array.from(todocontainer.children).indexOf(parentLi);
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        parentLi.remove();
    }
}, false);
