import { TodoModel } from './model'
import { TodoController } from './controller'
import { TodoView as view } from './view'

const model = new TodoModel()
const controller = new TodoController(model, view)
controller.render()
