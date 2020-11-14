import React, {useState, useRef} from 'react'

import './Input.scss'

export const Input = (props) => {

  const [value, setValue] = useState('')
  const placeholder = useRef(null)

  const onChangeHandler = (e) => {
    setValue(e.target.value)

    placeholder.current.classList.remove('input__placeholder--hidden')

    if (e.target.value.trim().length > 0) {
      placeholder.current.classList.add('input__placeholder--hidden')
    }
  }

  const classes = ['input__field']

  props.classes && classes.push(...props.classes)

  return (
    <div className='input'>
      <input
        type={props.type}
        className={classes.join(' ')}
        data-required={props.required}
        id={props.id}
        data-id={props.id}
        value={value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className='input__label'>
        {props.text}
      </label>
      <span className='input__placeholder' ref={placeholder}>
        {props.placeholder}
        {props.required && <span>*</span>}
      </span>
    </div>
  )
}
