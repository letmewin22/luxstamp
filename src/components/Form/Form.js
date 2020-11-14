import React, {useEffect, useState, useRef} from 'react'
import { Button } from '../Button/Button'


export const Form = (props) => {

  const inputs = useRef([])

  useEffect(() => {

    props.children.forEach((child) => {
      inputs.current.push({
        field: child.props.id,
        value: ''
      })
    })

  }, [props.children])

  const [values, setValues] = useState(inputs.current)
  
  const classes = ['form']

  props.classes && classes.push(props.classes)

  const onChange = (e) => {

    values.forEach(el => {
      if (e.target.dataset.id === el.field) {
        el.value = e.target.value
      }
  })

    setValues([...values])
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className={classes.join(' ')}>
      {React.Children.map(props.children, (child) => (
        React.cloneElement(child, {onChange})
      )
      )}
      <Button 
        text={'Замовити печатку'}
        classes='form__btn'
        type='submit'
      />
    </form>
  )
}
