import React, {useContext, useEffect, useState} from 'react'
import {fetchPopup} from '@/api/popup'
import {Button} from '../Button/Button'
import {CallbackBtn} from '../CallbackBtn/CallbackBtn'
import {Input, Form} from '../Form'
import {PopUp} from '../PopUp/PopUp'
import {Messengers} from '../Messengers/Messengers'
import TextContext from '@/context/TextContext'

import './CallbackPopUp.scss'
import {localizeForm} from '@/utils/localizeForm'

export const CallbackPopUp = () => {
  const [isVisible, setVisibility] = useState(false)

  const {callbackWindow} = useContext(TextContext)

  const onSubmit = (data, cb, loader) => {
    fetchPopup(data, cb, callbackWindow.form.errorMessage, loader)
  }

  const open = () => {
    setVisibility(true)
  }

  const [inputs, setInputs] = useState([
    {
      tagName: 'input',
      type: 'tel',
      id: 'phone2',
      placeholder: callbackWindow.form.inputs[0].placeholder,
      classes: 'callback-form__input',
      required: [
        {type: 'minlen', minValue: 10},
        {type: 'maxlen', maxValue: 13},
        {type: 'phone'},
      ],
      requiredText: callbackWindow.form.inputs[0].requiredText,
    },
  ])

  useEffect(localizeForm.bind(null, inputs, callbackWindow.form, setInputs), [
    callbackWindow,
  ])

  return (
    <>
      <CallbackBtn onClick={open} />
      <PopUp
        classes={['callback__pop-up']}
        visible={{isVisible, setVisibility}}
      >
        <h2 className='callback__pop-up-h'>{callbackWindow.title}</h2>
        <Form classes='callback-form' onSubmit={onSubmit}>
          {inputs.map(input => (
            <Input
              key={input.placeholder}
              tagName={input.tagName && input.tagName}
              type={input.type && input.type}
              id={input.id && input.id}
              placeholder={input.placeholder && input.placeholder}
              classes={input.classes && input.classes}
              required={input.required && input.required}
              requiredText={input.requiredText && input.requiredText}
              text={input.text && input.text}
            />
          ))}
          <Button
            text={callbackWindow.form.button}
            classes='callback-form__btn'
            type='submit'
          />
        </Form>
        <h3 className='callback__pop-up-h-small'>
          {callbackWindow.messengerText}
        </h3>
        <Messengers classes={['callback__pop-up-links']} />
      </PopUp>
    </>
  )
}
