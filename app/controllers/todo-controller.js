import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/todo.js"


function _drawTodoById() {
  let todoItem = store.State.recentTodo
  let todoId = todoItem._id
  if (todoItem.completed == true) {
    document.getElementById(`${todoId}-checky`).classList.add("todo-done")
    document.getElementById(`${todoId}`).classList.remove("order-0")
    document.getElementById(`${todoId}`).classList.add("order-9")

  } else {
    document.getElementById(`${todoId}-checky`).classList.remove("todo-done")
    document.getElementById(`${todoId}`).classList.remove("order-9")
    document.getElementById(`${todoId}`).classList.add("order-0")
  }
}

function _drawNewTodo() {
  document.getElementById("todo-insert").innerHTML += store.State.newTodo.Template
}

function _removeTodoById() {
  let todoId = store.State.deleteTodoTarget._id
  document.getElementById(`${todoId}`).remove()
}

function _drawAllTodos() {
  let template = ""
  store.State.todos.forEach(todoItem => template += todoItem.Template)
  document.getElementById("todo-insert").innerHTML = template
  console.log("drawAllTodos ran");
}


export default class TodoController {
  constructor() {
    store.subscribe("recentTodo", _drawTodoById)
    store.subscribe("deleteTodoTarget", _removeTodoById)
    store.subscribe("newTodo", _drawNewTodo)
    store.subscribe("initialTodoPull", _drawAllTodos)
    TodoService.pullTodos()
  }

  addTodo(e) {
    e.preventDefault();
    let formData = e.target;
    let todo = {
      description: formData.description.value
    };
    TodoService.addTodoAsync(todo);
    formData.reset()
  }

  crossTodo(todoId) {
    TodoService.crossTodo(todoId)
    // send up to the API that it is being activated
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
