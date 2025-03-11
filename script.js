'use strict';

let todocontainer = document.querySelector('.todo-list');
let todoTextBox = document.getElementById("todo");

function addTodo(){
    if(todoTextBox.value  === ''){
        alert("Empty Todo Cannot Be Added.");
    }else{
        let newLi = document.createElement("li");
        newLi.innerHTML = todoTextBox.value;
        todocontainer.append(newLi);
        let newspan = document.createElement("span");
        newspan.innerHTML = 'X';
        newLi.append(newspan);
    }
    todoTextBox.value = '';
}

todocontainer.addEventListener("click", (hit)=>{
    if(hit.target.tagName === "LI"){
        hit.target.classList.toggle("chosen");
    }else if(hit.target.tagName ==="SPAN"){
        hit.target.parentElement.remove();
    }
}, false);