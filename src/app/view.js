export function TodoView ({ todos }) {
  const todosList = todos.map(todo => `
    <div>
      <span>${todo.text}</span>
      <button data-id="${todo.id}" class="btn-delete">
        Delete
      </button>

      <span>
        <input data-id="${todo.id}"/>
        <button data-id="${todo.id}" class="btn-update">
          Update
        </button>
      </span>
    </div>
  `).join('')

  return (`
    <main>
      <input class="input-add"/>
      <button class="btn-add">Add</button>
      <div>${todosList}</div>
    </main>
  `)
}
