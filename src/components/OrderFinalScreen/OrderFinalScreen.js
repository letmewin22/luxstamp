import TextContext from '@/context/TextContext'
import React, {useContext, useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import {Form, Input} from '../Form'

const localizeForm = (inputs, sendForm, setInputs) => {
  inputs.forEach((input, i) => {
    Object.keys(input).map(el => {
      return sendForm.inputs[i][el] && (input[el] = sendForm.inputs[i][el])
    })
  })
  setInputs([...inputs])
}

export const OrderFinalScreen = ({finalPrice, onSubmit}) => {
  const {sendForm} = useContext(TextContext)

  const [inputs, setInputs] = useState([
    {
      tagName: 'input',
      type: 'text',
      id: 'order-name',
      placeholder: 'Ваше ім’я',
      classes: 'order-form__input',
    },
    {
      tagName: 'input',
      type: 'tel',
      id: 'order-phone',
      placeholder: 'Номер телефону',
      classes: 'order-form__input',
      required: {type: 'minlen', minValue: 10},
      requiredText: 'Некорректний номер',
    },
    {
      tagName: 'input',
      type: 'select',
      id: 'order-city',
      options: [
        'Киев',
        'Ивано-Франковск',
        'Новоград-Волынский',
        'Бахмач',
        'Другой',
      ],
      placeholder: 'Город',
      text: 'Выберите ваш город',
      classes: 'order-form__input',
    },
    {
      tagName: 'input',
      type: 'select',
      id: 'order-delivery',
      options: ['Нова пошта', 'УкрПошта', 'МістЕкспресс', 'Самовивіз'],
      placeholder: 'Вид доставки',
      text: 'Оберіть вид доставки',
      classes: 'order-form__input',
    },
    {
      tagName: 'input',
      type: 'select',
      id: 'order-messanger',
      options: ['Telegram', 'Viber', 'Facebook', 'E-mail'],
      placeholder: 'Мессенджер',
      text: "Як з вами зручніше тримати зв'язок?",
      classes: 'order-form__input',
    },
    {
      tagName: 'input',
      type: 'textarea',
      id: 'order-textarea',
      placeholder: 'Хочу печатку за 1 годину!',
      text: 'Коментар до замовлення',
      classes: 'order-form__input order-form__input--full',
    },
  ])

  useEffect(localizeForm.bind(null, inputs, sendForm, setInputs), [sendForm])

  return (
    <div className='order__final-screen'>
      <div className='order__final-price'>
        <p>
          {sendForm.priceText} <span>{finalPrice} грн</span>
        </p>
      </div>
      <div className='order__form-wrapper'>
        <h2 className='h2'>{sendForm.title}</h2>
        <Form classes='order-form' onSubmit={onSubmit}>
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
              options={input.options && input.options}
            />
          ))}
          <div className='form__bottom'>
            <p>
              <span>*</span> {sendForm.note}
            </p>
            <Button text={sendForm.button} classes='form__btn' type='submit' />
          </div>
        </Form>
      </div>
    </div>
  )
}
