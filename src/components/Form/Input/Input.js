import React, {useState, useRef, useEffect} from 'react'
import {required} from '../required'

import './Input.scss'

export const Input = props => {
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')
  const [isPlaceholder, setIsPlaceholder] = useState(true)

  useEffect(() => {
    props.values &&
      props.values.forEach(val => {
        if (val.field === props.id) {
          setValue(val.value)
          setIsPlaceholder(val.placeholder)
          setError(val.error)
        }
      })
  }, [props.id, props.values])

  const placeholder = useRef(null)

  const onChangeHandler = e => {
    if (!Boolean(props.values)) {
      setValue(e.target.value)
      setIsPlaceholder(true)

      if (e.target.value.trim().length > 0) {
        setIsPlaceholder(false)
      }

      const isRequired = required({el: e.target, props})
      setError(isRequired)
    }

    props.onChange(e)
  }

  const classes = ['input']
  const placeHolderClasses = ['input__placeholder']

  if (!isPlaceholder) {
    placeHolderClasses.push('input__placeholder--hidden')
  }

  props.classes && classes.push(props.classes)

  const inputProps = {
    'data-required': !!props.required,
    id: props.id,
    'data-id': props.id,
    value: value,
    onChange: onChangeHandler,
  }

  const inputType = () => {
    if (props.type === 'textarea') {
      return (
        <>
          <textarea
            className={`input__field input__field--textarea ${
              error && 'input__field--error'
            }`}
            {...inputProps}
          />
          <span className={placeHolderClasses.join(' ')} ref={placeholder}>
            {props.placeholder}
            {props.required && <span>*</span>}
          </span>
        </>
      )
    } else if (props.type === 'select') {
      return (
        <select className='input__field input__field--select' {...inputProps}>
          <option value='none' hidden={true}>
            {props.placeholder}
          </option>
          {props.options &&
            props.options.map(option => <option key={option}>{option}</option>)}
        </select>
      )
    } else {
      return (
        <>
          <input
            type={props.type}
            className={`input__field ${error && 'input__field--error'}`}
            {...inputProps}
          />
          <span className={placeHolderClasses.join(' ')} ref={placeholder}>
            {props.placeholder}
            {props.required && <span>*</span>}
          </span>
        </>
      )
    }
  }

  return (
    <div className={classes.join(' ')}>
      <div
        className={`input__field-wrapper ${
          props.type === 'select' && 'input__field-wrapper--select'
        }`}
      >
        {inputType()}
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
