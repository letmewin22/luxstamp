import React, {useEffect, useState, useRef} from 'react'
import { required } from './required'

import './Form.scss'
import { fetchContacts } from '@/api/contacts'

export const Form = (props) => {
  const inputs = useRef([])

  useEffect(() => {
    props.children.forEach((child) => {
      if (child.props.tagName) {
        inputs.current.push({
          field: child.props.id,
          value: '',
          placeholder: true,
          required: !!child.props.required,
          error: false
        })
      }
    })
  }, [props.children])

  const [values, setValues] = useState(inputs.current)

  const [isActive, setIsActive] = useState(false)

  const onChange = (e) => {
    values.forEach((el, i) => {
      if (e.target.dataset.id === el.field) {
        el.value = e.target.value
        el.placeholder = true
        const inputProps = {...props.children[i].props, setIsActive}
        const isRequired = required({el: e.target, props: inputProps})
        el.error = isRequired
        if(el.value.length > 0) {
          el.placeholder = false
        }
      }
    })

    setValues([...values])
  }

  const classes = ['form']
  props.classes && classes.push(props.classes)

  const onSubmit = (e) => {
    e.preventDefault()

    if (isActive) {
      fetchContacts(values, () => {
        values.forEach(val => {
          val.value = ''
          val.placeholder = true
          if (val.required) {
            val.error = false
          }
        })
        setValues([...values])
      })
      // console.log(values)
      


      } else {
        values.forEach(val => {
          if (val.required) {
            val.error = true
          }
        })
        setValues([...values])
      }   
  }

  return (
    <form onSubmit={onSubmit} className={classes.join(' ')}>
      {React.Children.map(props.children, (child) => {
        if (child.props.tagName) {
          return React.cloneElement(child, {onChange, setIsActive, values})
        } else {
          return child
        }
      })}
    </form>
  )
}
