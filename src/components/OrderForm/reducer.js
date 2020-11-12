import { clamp } from '@/utils/clamp'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change': return (() => {
        const {e, counter, exclude} = action.payload

        const l = state.length
    
        const screenId = +e.target.dataset.screenId
        const targetName = e.target.dataset.name
        const allExcludes = []
    
        state[screenId].items.forEach((item) => {
          if (item.name === targetName) {
            !state[screenId].excludes.includes(...item.exclude) &&
              (state[screenId].excludes = item.exclude)
          }
        })
    
        state.forEach((screen) => allExcludes.push(...screen.excludes))
        exclude.current = allExcludes
    
        const setSelect = () => {
          state[screenId].items.forEach((item) => {
            state[screenId].unique && (item.selected = false)
            if (item.name === targetName) {
              item.selected = item.selected ? false : true
            }
          })
        }
    
        const setVisible = () => {
          state.forEach((step) => {
            if (step.parents.includes(targetName)) {
              step.visible = true
            }
            step.exists = true
            if (exclude.current.includes(step.title)) {
              step.exists = false
            }
          })
        }
    
        if (counter.current >= screenId) {
          const toHideEls = state.filter((el) => el.id > screenId)
    
          toHideEls.forEach((el) => {
            el.visible = false
            el.items.forEach((item) => (item.selected = false))
          })
          setSelect()
          counter.current = screenId
          setVisible()
        } else {
          setVisible()
          setSelect()
    
          counter.current++
          counter.current = clamp(counter.current, 0, l - 1)
        }
    
        return [...state]
      })()
      
    default: return state
  }
}