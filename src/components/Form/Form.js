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

  const classes = ['form']

  props.classes && classes.push(props.classes)

  const [isActive, setIsActive] = useState(false)


  const onChange = (e) => {
    values.forEach((el) => {
      if (e.target.dataset.id === el.field) {
        el.value = e.target.value
      }
    })

    setValues([...values])
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (isActive) {
      console.log(values)
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
