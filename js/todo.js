const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  const text = event.target.parentElement.firstChild.innerText;
  for (let i = 0; i < toDos.length; i++) {
    if (text === toDos[i]) {
      toDos.splice(i, 1);
      // toDos = toDos.filter((item) => {
      //   return item !== text;
      // });
      // console.log(toDos);
    }
  }
  savedToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDos.push(newTodo);
  todoList.appendChild(li);

  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((element) => {
    paintToDo(element);
  });
}
