class List {

  static allLists = []

  constructor(list) {
      this.name = list.attributes.name
      this.id = list.id
      // this.todos = []
      List.allLists.push(this)
  }

  renderList() {
    let div = document.getElementById('listContainer')
    div.innerHTML += this.generateListHTML()
  }

  generateListHTML() {
    return `<p>${this.name}</p>`
  }

  static renderLists() {
    for (let list of this.allLists) {
        list.renderList()
    }
  }

  static fetchLists() {
    fetch("http://localhost:3000/lists")
    .then(r => r.json())
    .then(lists => {
      for (let list of lists.data) {
        let newList = new List(list)
      }
      this.renderLists()

    })
  }

  static createList() {
    event.preventDefault()
    const name = document.getElementById('listName').value
    document.getElementById('listName').value = ""
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({list: {name: name}})
    }

    fetch("http://localhost:3000/lists", options)
    .then(r => r.json())
    .then(listObj => {
      let newList = new List(listObj.data)
      newList.renderList()
    })
  }


}
