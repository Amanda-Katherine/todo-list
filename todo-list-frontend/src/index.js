const form = document.getElementById('listForm')

form.addEventListener('submit', submitForm)

function submitForm() {
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
  .then(listObj => renderList(listObj.data) )
}


function renderList(list) {
  let div = document.getElementById('listContainer')
  let pgh = document.createElement('p')
  pgh.innerText = list.attributes.name
  div.append(pgh)
}

function renderLists(lists) {
  for (list of lists) {
    renderList(list)
  }
}


function fetchLists() {
  fetch("http://localhost:3000/lists")
  .then(r => r.json())
  .then(lists => renderLists(lists.data))
}

fetchLists()
