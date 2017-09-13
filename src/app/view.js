export function TodoView ({ todos }) {
  const todosList = todos.map(todo => `
    <div>
      <span class="todo ${todo.done ? 'done' : 'pending'}">
        ${todo.text}
      </span>
      <button data-id="${todo.id}" class="btn-delete">
        Delete
      </button>

      <span>
        <input data-id="${todo.id}"/>
        <button data-id="${todo.id}" class="btn-update">
          Update
        </button>
        <button
          data-id="${todo.id}"
          class="btn-finish ${todo.done ? 'done' : 'pending'}"
        >
          Finish
        </button>
        <button
          data-id="${todo.id}"
          class="btn-redo ${todo.done ? 'done' : 'pending'}"
        >
          Redo
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
