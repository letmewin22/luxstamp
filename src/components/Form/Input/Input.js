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

    props.onChange(e)
  }

  const classes = ['input']

  props.classes && classes.push(props.classes)

  return (
    <div className={classes.join(' ')}>
      <div className='input__field-wrapper'>
        {props.type === 'textarea' ? (
          <textarea
            className='input__field input__field--textarea'
            data-required={props.required}
            id={props.id}
            data-id={props.id}
            value={value}
            onChange={onChangeHandler}
          />
        ) : (
          <input
            type={props.type}
            className={'input__field'}
            data-required={props.required}
            id={props.id}
            data-id={props.id}
            value={value}
            onChange={onChangeHandler}
          />
        )}
        <span className='input__placeholder' ref={placeholder}>
          {props.placeholder}
          {props.required && <span>*</span>}
        </span>
      </div>
      <label htmlFor={props.id} className='input__label'>
        {props.text}
      </label>
    </div>
  )
}
