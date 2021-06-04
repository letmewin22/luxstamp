export const required = ({el, props}) => {
  let state = false

  if (el.dataset.required) {
    state = false
    if (!props.required) {
      return
    }
    const errors = []

    const value = el.value.trim().replaceAll(/\D/gi, '').length

    props.required.forEach(v => {
      if (v.type === 'minlen') {
        const isLessThanMinValue = value < v.minValue
        if (isLessThanMinValue && value > 0) {
          errors.push(true)
        }
      }
      if (v.type === 'maxlen') {
        const isMoreThanMaxValue = value > v.maxValue

        if (isMoreThanMaxValue && value > 0) {
          errors.push(true)
        }
      }
      if (v.type === 'phone') {
        const regExp = /\D/
        const isPhoneValid = !regExp.test(value)

        if (!isPhoneValid && value > 0) {
          errors.push(true)
        }
      }
    })

    state = errors.includes(true)
    props.setIsActive && props.setIsActive(!errors.includes(true))
  }
  return state
}
