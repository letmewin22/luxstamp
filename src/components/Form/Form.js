import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from 'react'
import {required} from './required'

import './Form.scss'
import {FormLoader} from '../FormLoader/FormLoader'
import {PopUp} from '../PopUp/PopUp'
import TextContext from '@/context/TextContext'

const createStore = (props, inputs) => {
  const children = Array.isArray(props.children[0])
    ? props.children[0]
    : props.children

  children.forEach(child => {
    if (child.props && child.props.tagName) {
      inputs.current.push({
        field: child.props.id,
        value: '',
        placeholder: true,
        required: !!child.props.required,
        error: false,
      })
    }
  })
}

export const Form = props => {
  const inputs = useRef([])

  useEffect(createStore.bind(null, props, inputs), [])
  const {sendForm} = useContext(TextContext)

  const [values, setValues] = useState(inputs.current)

  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onChange = useCallback(
    e => {
      values.forEach((el, i) => {
        if (e.target.dataset.id === el.field) {
          el.value = e.target.value
          el.placeholder = true

          const children = Array.isArray(props.children[0])
            ? props.children[0]
            : props.children

          const inputProps = {
            ...children[i].props,
            setIsActive,
          }
          const isRequired = required({el: e.target, props: inputProps})
          el.error = isRequired
          if (el.value.length > 0) {
            el.placeholder = false
          }
        }
      })

      setValues([...values])
    },
    [props.children, values]
  )

  const classes = ['form']
  props.classes && classes.push(props.classes)

  const onSubmit = e => {
    e.preventDefault()
    if (isActive) {
      props.onSubmit(
        values,
        () => {
          values.forEach(val => {
            val.value = ''
            val.placeholder = true
            if (val.required) {
              val.error = false
            }
          })
          setIsSuccess(true)
          setValues([...values])
        },
        setIsLoading
      )
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
    <>
      <form
        onSubmit={onSubmit}
        className={classes.join(' ')}
        encType='multipart/form-data'
      >
        {React.Children.map(props.children, child => {
          if (child.props.tagName) {
            return React.cloneElement(child, {onChange, setIsActive, values})
          } else {
            return child
          }
        })}
        {isLoading && <FormLoader />}
      </form>
      <PopUp
        bigText={sendForm.thankYou.bigText}
        text={sendForm.thankYou.text}
        visible={{isSuccess, setIsSuccess}}
      />
    </>
  )
}
