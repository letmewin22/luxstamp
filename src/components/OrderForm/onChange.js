class OnChange {
  constructor(state, action) {
    
    this.state = state
    this.e = action.payload
    this.counter = {current: 0}
    this.exclude = []

    this.init()

    return [...this.state]
  }

  init() {
    this.screenId = +this.e.target.dataset.screenId
    this.targetName = this.e.target.dataset.name
    this.targetParent = this.e.target.dataset.parent
    this.allExcludes = []

    this.setExcludes()

    // this.state.forEach(el => {
    //   el.price && console.log(el.price)
    //   el.items.forEach(item => {
    //     item.selected && item.price && console.log(item.price)
    //   })
    // })

    this.display()
  }

  setExcludes() {
    this.state[this.screenId].items.forEach((item) => {
      if (item.key === this.targetName) {
          this.state[this.screenId].excludes = item.exclude
      }
    })

    this.state.forEach((screen) => this.allExcludes.push(...screen.excludes))
    this.exclude.current = this.allExcludes
  }

  setSelect() {
    this.state[this.screenId].items.forEach((item) => {
      this.state[this.screenId].unique && (item.selected = false)
      if (item.key === this.targetName) {
        item.selected = item.selected ? false : true
      }
    })
  }

  setExists(item, target) {
    item.exists = true
    if (this.exclude.current.includes(target)) {
      item.exists = false
    }
  }

  setVisible() {
    this.state.forEach((step) => {
      if (
        step.parents.includes(this.targetName) ||
        step.parents.includes(this.targetParent)
      ) {
        step.visible = true
      }
      this.setExists(step, step.key)
    })
  }

  setInputVisible() {
    this.state.forEach(el => el.items.forEach((item) => {
      this.setExists(item, item.key)
    }))
  }

  display() {
    if (this.counter.current < this.screenId) {
      this.counter.current++
    }

    const toHideEls = this.state.filter((el) => el.id > this.screenId)

    toHideEls.forEach((el) => {
      el.visible = false
      el.items.forEach((item) => (item.selected = false))
    })

    this.counter.current = this.screenId

    this.setInputVisible()
    this.setSelect()
    this.setVisible()
  }
}

export const onChange = (state, action) => new OnChange(state, action)
