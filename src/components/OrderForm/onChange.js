class OnChange {
  constructor(state, action) {
    
    this.state = state

    this.e = action.payload.e
    this.counter = action.payload.counter
    this.exclude = action.payload.exclude

    this.init()

    return [...this.state]
  }  
  
  init() {
    this.screenId = +this.e.target.dataset.screenId
    this.targetName = this.e.target.dataset.name
    this.targetParent = this.e.target.dataset.parent
    this.allExcludes = []

    this.setExcludes()
    this.display()
  }

  setExcludes() {

    this.state[this.screenId].items.forEach((item) => {
      if (item.name === this.targetName) {
        !this.state[this.screenId].excludes.includes(...item.exclude) &&
          (this.state[this.screenId].excludes = item.exclude)
      }
    })
  
    this.state.forEach((screen) => this.allExcludes.push(...screen.excludes))
    this.exclude.current = this.allExcludes
  }

  setSelect() {
    this.state[this.screenId].items.forEach((item) => {
      this.state[this.screenId].unique && (item.selected = false)
      if (item.name === this.targetName) {
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
      if (step.parents.includes(this.targetName) || 
      step.parents.includes(this.targetParent)
      ) {
        step.visible = true
      }
      this.setExists(step, step.title)
    })
  }

  setInputVisible() {
    this.state[this.screenId+1] && 
    this.state[this.screenId+1].items.forEach((item) => {
      this.setExists(item,item.name)
    })
  }

  display() {

    if (this.counter.current >= this.screenId) {
      const toHideEls = this.state.filter((el) => el.id > this.screenId)
  
      toHideEls.forEach((el) => {
        el.visible = false
        el.items.forEach((item) => (item.selected = false))
      })

      this.counter.current = this.screenId
    } else {
      this.counter.current++
    }
    this.setSelect()
    this.setInputVisible()
    this.setVisible()
  }
}

export const onChange = (state, action) => new OnChange(state, action)