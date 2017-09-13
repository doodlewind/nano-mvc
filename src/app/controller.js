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
            // 使用 done 属性标识是否完成
            done: false,
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
              done: todo.done,
              text: todo.id === id ? text : todo.text
            })
          )
        },
        // 点击 redo 按钮时将对应 id 元素 done 设为 false
        '.btn-redo' (e) {
          const id = this.getTargetAttr(e, 'data-id')
          this.model.todos = this.model.todos.map(
            todo => ({
              id: todo.id,
              done: todo.id === id ? false : todo.done,
              text: todo.text
            })
          )
        },
        // 点击 finish 按钮时将对应 id 元素 done 设为 true
        '.btn-finish' (e) {
          const id = this.getTargetAttr(e, 'data-id')
          this.model.todos = this.model.todos.map(
            todo => ({
              id: todo.id,
              done: todo.id === id ? true : todo.done,
              text: todo.text
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
