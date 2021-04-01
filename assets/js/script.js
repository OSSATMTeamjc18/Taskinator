var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskhandler = function (event) {
console.log(event);
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskhandler);