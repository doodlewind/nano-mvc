import { Model } from '../framework/index'

export class TodoModel extends Model {
  constructor () {
    super({ todos: [] })
  }
  get todos () {
    return this.data.todos
  }
  set todos (todos) {
    this.data.todos = todos
    this.publish(todos)
  }
}
