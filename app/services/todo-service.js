import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const Toast = Swal.mixin({
  toast: true,
  position: 'top-start',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  onOpen: (toast) => {
    // @ts-ignore
    toast.addEventListener('mouseenter', Swal.stopTimer)
    // @ts-ignore
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/grantignotusbrees/todos/",
  timeout: 8000
});

class TodoService {

  constructor() {
    store.subscribe("newTodo", this.pullTodos)
    store.subscribe("deleteTodoTarget", this.pullTodos)
  }
  pullTodos() {
    todoApi.get("").then(res => {
      console.log(res);
      store.commit("todos", res.data.data.map(rawTodoData => new Todo(rawTodoData)))
      console.log("pulling down Todos");
      if (store.State.initialTodoPull.length == 0) {
        store.commit("initialTodoPull", "string")
        console.log(store.State.initialTodoPull);
      }
    }).catch(err => console.error(err))
  }
  addTodoAsync(todo) {
    todoApi.post("/", new Todo(todo)).then(res => {
      console.log(res);
      debugger
      store.commit("newTodo", new Todo(res.data.data))
    }).catch(err => console.error(err))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  crossTodo(todoId) {
    let crossedTodo = store.State.todos.find(res => res._id == todoId)
    console.log(crossedTodo);
    crossedTodo.completed == false ? crossedTodo.completed = true : crossedTodo.completed == true ? crossedTodo.completed = false : false
    console.log(crossedTodo._id);
    todoApi.put("" + todoId, crossedTodo).then(res => {
      console.log(res);
      store.commit("recentTodo", new Todo(crossedTodo))
    }).catch(err => console.error(err))
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    let targetTodo = store.State.todos.find(res => res._id == todoId)
    console.log(targetTodo);
    todoApi.delete("" + todoId, targetTodo).then(res => {
      console.log(res);
      store.commit("deleteTodoTarget", new Todo(targetTodo))
    }).catch(err => console.error(err))
  }

  todoFromYesterday() {
    // Look at todos after API pulls.
    if (store.State.todos.length > 0) {
      let check = store.State.todos.filter(i => i.completed == true)
      let todoCount = store.State.todos.length
      if (todoCount > 0) {
        Toast.fire({
          icon: 'info',
          title: "You have " + todoCount + " unfinished tasks"
        })
      }
    }
  }

}



const todoService = new TodoService();
export default todoService;
