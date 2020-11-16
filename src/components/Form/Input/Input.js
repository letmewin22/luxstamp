import React, {useState, useRef} from 'react'
import { required } from '../required'

import './Input.scss'

export const Input = (props) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  
  const placeholder = useRef(null)

  const onChangeHandler = (e) => {
    setValue(e.target.value)

    placeholder.current.classList.remove('input__placeholder--hidden')

    if (e.target.value.trim().length > 0) {
      placeholder.current.classList.add('input__placeholder--hidden')
    }

    const isRequired = required({el: e.target, props})

    setError(isRequired)

    props.onChange(e)
  }

  const classes = ['input']

  props.classes && classes.push(props.classes)

  const inputProps = {
    'data-required': !!props.required,
    'id': props.id,
    'data-id': props.id,
    'value': value,
    'onChange': onChangeHandler
  }

  return (
    <div className={classes.join(' ')}>
      <div className='input__field-wrapper'>
        {props.type === 'textarea' ? (
          <textarea
            className={`input__field input__field--textarea ${
              error && 'input__field--error'
            }`}
           {...inputProps}
          />
        ) : (
          <input
            type={props.type}
            className={`input__field ${error && 'input__field--error'}`}
            {...inputProps}
          />
        )}
        <span className='input__placeholder' ref={placeholder}>
          {props.placeholder}
          {props.required && <span>*</span>}
        </span>
        {props.required && (
          <span
            className={`input__required-text ${
              error && 'input__required-text--active'
            }`}
          >
            {props.requiredText}
          </span>
        )}
      </div>
      <label htmlFor={props.id} className='input__label'>
        {props.text}
      </label>
    </div>
  )
}
