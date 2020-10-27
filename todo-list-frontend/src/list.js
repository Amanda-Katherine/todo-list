class List {

  static allLists = []

  constructor(list) {
      this.name = list.attributes.name
      this.id = list.id
      this.todos = list.attributes.todos.map(todo => new Todo(todo))
      List.allLists.push(this)
  }

  renderList() {
    let div = document.getElementById('listContainer')
    let pgh = document.createElement("p")
    pgh.id = this.id
    pgh.innerText = this.name
    pgh.addEventListener('click', this.showList.bind(this))
    div.append(pgh)
  }


  showList() {
    let container = document.getElementById('container')
    let h3 = document.createElement('h3')
    let ul = document.createElement("ul")
    let form = document.createElement("form")
    let label = document.createElement("label")
    let input = document.createElement('input')
    let btn = document.createElement("input")
    btn.type = "submit"
    btn.innerText = "Submit"
    input.id = "content"
    label.innerText = "Content:"
    form.id = "todoForm"
    ul.id = "listUl"
    form.append(label)
    form.append(input)
    form.append(btn)
    container.innerHTML = ""
    h3.innerText = this.name
    container.append(h3)
    container.append(ul)
    for (let todo of this.todos) {
      ul.innerHTML += todo.todoHTML()
    }
    container.append(form)
    form.addEventListener('submit', this.submitTodo.bind(this))
  }

  async submitTodo(){
    event.preventDefault()
    let content = document.getElementById("content").value
    let list_id = this.id
    let todo = {todo: {content, list_id}} // destructuring lines 52/53 -> keys and variable names must match
    let options = {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(todo)
    }

    document.getElementById("content").value = ""
    try {
      let response = await fetch("http://localhost:3000/todos", options)
      let todo = await response.json()
        if (todo.data) {
          let newTodo = new Todo(todo.data)
          let list = List.allLists.find(list => parseInt(list.id) === newTodo.listId)
          let ul = document.querySelector("ul")
          list.todos.push(newTodo)
          ul.innerHTML += newTodo.todoHTML()
        } else {
          throw new Error(todo.message)
        }
    } catch(err) {
      alert(err)
    }

  }

  // generateListHTML() {
  //   return `<p id="${this.id}">${this.name}</p>`
  // }

  static renderLists() {
    for (let list of this.allLists) {
        list.renderList()

    }
  }

  static fetchLists() {
    fetch("http://localhost:3000/lists")
    .then(r => r.json())
    .then(lists => {
      if (lists.data) {
        for (let list of lists.data) {
          let newList = new List(list)
        }
        this.renderLists()
      } else {
        throw new Error(lists.data)
      }

    }).catch(err => alert(err))
  }

  static createList() {
    event.preventDefault()
    const name = document.getElementById('listName').value
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({list: {name: name}})
    }

    document.getElementById('listName').value = ""

    fetch("http://localhost:3000/lists", options)
    .then(r => r.json())
    .then(listObj => {
      if (listObj.data) {
        let newList = new List(listObj.data)
        newList.renderList()
      } else {
        throw new Error(listObj.message)
      }

    }).catch((err) => alert(err))
  }


}
