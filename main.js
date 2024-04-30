const inputTodo = document.querySelector('.add_todo')
const btAddTodo = document.querySelector('.bt_add_todo')
const insertTodo = document.querySelector('.elements_todo_box')
const deleteTodo = document.querySelector('.delete_todo')

const fragmentLi = document.createDocumentFragment()

const task = []

function addTodo () {
  const value = inputTodo.value

  const boxTodo = document.createElement('li')
  boxTodo.classList.add('li_todo_content')

  const text = document.createElement('p')
  task.push(value)
  text.textContent = `${task.at(-1)}`

  boxTodo.appendChild(text)

  const buttomDelete = document.createElement('button')
  buttomDelete.setAttribute('type', 'button')
  buttomDelete.textContent = 'Delete'
  buttomDelete.classList.add('delete_todo')

  boxTodo.appendChild(buttomDelete)
  return boxTodo
}

btAddTodo.addEventListener('click', () => {
  insertTodo.appendChild(addTodo())
})
