export class Model {
  constructor (data) {
    this.data = data
    this.subscribers = []
  }
  publish (data) {
    this.subscribers.forEach(callback => callback(data))
  }
}

export class Controller {
  constructor (conf) {
    this.el = document.querySelector(conf.el)
    this.model = conf.model
    this.view = conf.view
    this.render = this.render.bind(this)
    this.el.addEventListener('click', (e) => {
      e.stopPropagation()
      const rules = Object.keys(conf.onClick || {})
      rules.forEach((rule) => {
        if (e.path[0].matches(rule)) conf.onClick[rule].call(this, e)
      })
    })
  }
  getTargetAttr (e, attr) {
    return e.path[0].getAttribute(attr)
  }
  getChild (selector) {
    return this.el.querySelector(selector)
  }
  render () {
    this.el.innerHTML = this.view(this.model)
  }
}
