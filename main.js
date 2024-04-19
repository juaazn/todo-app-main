const inputTodo = document.querySelector('.add_todo')
const btAddTodo = document.querySelector('.bt_add_todo')
const insertTodo = document.querySelector('.insert_todo')

const task = []

btAddTodo.addEventListener('click', () => {
  const value = inputTodo.value
  task.push(value)
})
