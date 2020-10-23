class Todo {

  constructor(todo){
    this.content = todo.attributes.content
    this.id = todo.id
    this.listId = todo.attributes.list_id
  }

  todoHTML() {
    return `<li id="${this.id}">${this.content}</li>`
  }


}
