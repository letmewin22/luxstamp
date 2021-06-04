import React, {useState} from 'react'
import {fetchPopup} from '@/api/popup'
import {Button} from '../Button/Button'
import {CallbackBtn} from '../CallbackBtn/CallbackBtn'
import {Input, Form} from '../Form'
import {PopUp} from '../PopUp/PopUp'
import {Messengers} from '../Messengers/Messengers'

import './CallbackPopUp.scss'

export const CallbackPopUp = () => {
  const [isVisible, setVisibility] = useState(false)

  const onSubmit = (data, cb, loader) => {
    fetchPopup(data, cb, 'Что-то пошло не так', loader)
  }

  const open = () => {
    setVisibility(true)
  }

  const [inputs] = useState([
    {
      tagName: 'input',
      type: 'tel',
      id: 'phone2',
      placeholder: 'Номер телефону',
      classes: 'callback-form__input',
      required: [
        {type: 'minlen', minValue: 10},
        {type: 'maxlen', maxValue: 13},
        {type: 'phone'},
      ],
      requiredText: 'Некоректний номер',
    },
  ])

  return (
    <>
      <CallbackBtn onClick={open} />
      <PopUp
        classes={['callback__pop-up']}
        visible={{isVisible, setVisibility}}
      >
        <h2 className='callback__pop-up-h'>
          Оставьте свой номер телефона и мы вам перезвоним
        </h2>
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
            text='Перезвоните мне'
            classes='callback-form__btn'
            type='submit'
          />
        </Form>
        <h3 className='callback__pop-up-h-small'>
          или напишите нам в мессенджеры:
        </h3>
        <Messengers classes={['callback__pop-up-links']} />
      </PopUp>
    </>
  )
}
