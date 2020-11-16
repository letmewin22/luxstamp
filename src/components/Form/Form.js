import React, {useEffect, useState, useRef} from 'react'

import './Form.scss'

export const Form = (props) => {
  const inputs = useRef([])

  useEffect(() => {
    props.children.forEach((child) => {
      if(child.props.tagName) {
      inputs.current.push({
        field: child.props.id,
        value: '',
      })
    }
    })
  }, [props.children])

  const [values, setValues] = useState(inputs.current)

  const [isActive, setIsActive] = useState(false)


  const onChange = (e) => {
    values.forEach((el) => {
      if (e.target.dataset.id === el.field) {
        el.value = e.target.value
      }
    })

    setValues([...values])
  }

  const classes = ['form']
  props.classes && classes.push(props.classes)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const fields = e.target.querySelectorAll('.input__field')
    const requiredText = e.target.querySelectorAll('.input__required-text')

    if (isActive) {
      console.log(values)

      fields && fields.forEach((field, i) => {
        if (field && field.dataset.required === 'true') {
          field.classList.remove('input__field--error')
        }
        requiredText[i] && requiredText[i].classList.remove('input__required-text--active')
      })
    } else {
      fields && fields.forEach((field, i) => {
        if (field && field.dataset.required === 'true') {
        field.classList.add('input__field--error')
      }
      requiredText[i] && requiredText[i].classList.add('input__required-text--active')
      })
    }
  }
  
  return (
    <form onSubmit={onSubmitHandler} className={classes.join(' ')}>
      {React.Children.map(props.children, (child) => {
        if(child.props.tagName) {
          return React.cloneElement(child, {onChange, setIsActive})
        } else {
          return child
        }
      })}
    </form>
  )
}
