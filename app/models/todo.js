
export default class Todo {
  constructor(data) {
    this._id = data._id || null
    this.description = data.description
    this.user = data.user || "grantignotusbrees"
    this.completed = data.completed || false

  }

  get Template() {
    let template = /*html*/ `
    <div class="col-12 d-flex py-1 rm-pr ${this.completed == true ? ' order-9' : ' order-0'}" id="${this._id}">
		  <div class="ml-2">
				<input type="checkbox" class="" onclick="app.todoController.crossTodo('${this._id}')" ${this.completed == true ? ' checked' : ''}>
			</div>
      <div id="${this._id}-checky" class="rm-my ml-3 custom-font-size ${this.completed == true ? ' todo-done' : ''}">${this.description}</div>
      <i onclick="app.todoController.removeTodo('${this._id}')" class="ra ra-x-mark ra-sm align-self-center justify-self-end mr-2 ml-auto delete-color"></i>
    </div>
    `


    return template
  }

}
