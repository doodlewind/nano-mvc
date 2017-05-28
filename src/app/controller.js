import { Controller } from '../framework/index'

export class TodoController extends Controller {
  constructor (model, view) {
    super({
      model,
      view,
      el: '#app',
      onClick: {
        '.btn-add' () {
          // 新增 Todo 时对数据全量赋值
          this.model.todos = this.model.todos.concat([{
            id: new Date().getTime().toString(),
            // 使用 getter 获取绑定至 DOM 元素的数据
            text: this.addInputText
          }])
        },
        '.btn-delete' (e) {
          const id = this.getTargetAttr(e, 'data-id')
          // 根据 id 过滤掉待删除元素
          this.model.todos = this.model.todos.filter(
            todo => todo.id !== id
          )
        },
        '.btn-update' (e) {
          const id = this.getTargetAttr(e, 'data-id')
          const text = this.getUpdateText(id)
          // 根据 id 更新元素
          this.model.todos = this.model.todos.map(
            todo => ({
              id: todo.id,
              text: todo.id === id ? text : todo.text
            })
          )
        }
      }
    })
    // 订阅 Model 更新事件
    this.model.subscribers.push(this.render)
  }
  getUpdateText (id) {
    return super.getChild(`input[data-id="${id}"]`).value
  }
  get addInputText () {
    return super.getChild('.input-add').value
  }
}
