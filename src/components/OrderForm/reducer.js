import { onChange } from './onChange'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change': return onChange(state, action)
      
    default: return state
  }
}