export const required = ({el, props}) => {
  let state = false

  if (el.dataset.required) {
    state = false
    if (!props.required) {
      return
    }
    const errors = []

    props.required.forEach(v => {
      if (v.type === 'minlen') {
        const isLessThanMinValue = el.value.trim().length < v.minValue
        if (isLessThanMinValue && el.value.trim().length > 0) {
          errors.push(true)
        }
      }
      if (v.type === 'maxlen') {
        const isMoreThanMaxValue = el.value.trim().length > v.maxValue

        if (isMoreThanMaxValue && el.value.trim().length > 0) {
          errors.push(true)
        }
      }
      if (v.type === 'phone') {
        const regExp = /\D/
        const isPhoneValid = !regExp.test(el.value.trim())

        if (!isPhoneValid && el.value.trim().length > 0) {
          errors.push(true)
        }
      }
    })

    state = errors.includes(true)
    props.setIsActive && props.setIsActive(!errors.includes(true))
  }
  return state
}
