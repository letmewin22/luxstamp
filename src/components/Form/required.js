export const required = ({el, props}) => {

  let state = false
  
  if (el.dataset.required) {
    state = false
    if (props.required && props.required.type === 'minlen') {
      const isLessThanMinValue = el.value.trim().length < props.required.minValue
      if (isLessThanMinValue && el.value.trim().length > 0) {
        state = true
      }

      props.setIsActive && props.setIsActive(!isLessThanMinValue) 
    }

    if (props.required && props.required.type === 'email') {
     const regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
      const isEmailValid = regExp.test(el.value.trim())
      if (!isEmailValid) {
        state = true
      }
      props.setIsActive && props.setIsActive(isEmailValid) 
    }
  }
  return state
}