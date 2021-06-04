import React, {useContext, useEffect, useState} from 'react'
import TextContext from '@/context/TextContext'

import './Contacts.scss'
import {Input, Form} from '../Form/'
import {Button} from '../Button/Button'
import {fetchContacts} from '@/api/contacts'
import LangContext from '@/context/LangContext'
import {Messengers} from '../Messengers/Messengers'

const localizeForm = (inputs, contacts, setInputs) => {
  inputs.forEach((input, i) => {
    Object.keys(input).map(el => {
      return contacts.inputs[i][el] && (input[el] = contacts.inputs[i][el])
    })
  })
  setInputs([...inputs])
}

export const Contacts = () => {
  const {footer, contacts} = useContext(TextContext)
  const lang = useContext(LangContext)

  const [inputs, setInputs] = useState([
    {
      tagName: 'input',
      type: 'text',
      id: 'name',
      placeholder: 'Ваше ім’я',
      classes: 'contacts-form__input',
    },
    {
      tagName: 'input',
      type: 'tel',
      id: 'phone',
      placeholder: 'Номер телефону',
      classes: 'contacts-form__input',
      required: [
        {type: 'minlen', minValue: 10},
        {type: 'maxlen', maxValue: 13},
        {type: 'phone'},
      ],
      requiredText: 'Некоректний номер',
    },
    {
      tagName: 'input',
      type: 'textarea',
      id: 'textarea',
      placeholder: 'Хочу печатку за 1 годину!',
      text: 'Коментар до замовлення',
      classes: 'contacts-form__input contacts-form__input--full',
    },
  ])

  useEffect(localizeForm.bind(null, inputs, contacts.form, setInputs), [
    contacts,
  ])

  const onSubmit = (data, cb, loader) => {
    fetchContacts(data, cb, contacts.form.errorMessage, loader)
  }

  return (
    <>
      <header className='contacts-header'>
        <div className='container contacts-header__container'>
          <h1 className='h1'>{lang === 'ru' ? 'Контакты' : 'Контакти'}</h1>
          <div className='contacts-header__items'>
            <div className='contacts-header__item'>
              <a className='contacts-header__link' href='tel:+380631902764'>
                +38 (063) 190 2764
              </a>
              <a
                className='contacts-header__link'
                href='mailto:luxstamp.ua@gmail.com'
              >
                luxstamp.ua@gmail.com
              </a>
              <Messengers classes={['contacts__messengers']} />
            </div>
            <div className='contacts-header__item'>
              <h4>{lang === 'ru' ? 'График работы' : 'Графік роботи'}:</h4>
              <span>Пн-Пт {lang === 'ru' ? 'с' : 'з'} 09.00 до 17.00</span>
              <span>{lang === 'ru' ? 'Обед' : 'Обід'} 13.00-14.00</span>
              <span>
                {lang === 'ru' ? 'Суббота — выходной' : 'Субота — вихідний'}
              </span>
              <span>
                {lang === 'ru' ? 'Воскресенье — выходной' : 'Неділя — вихідний'}
              </span>
            </div>
            <div className='contacts-header__item'>
              <span>{contacts.text1}</span>
              <span>{contacts.text2}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className='section contacts-rep'>
          <div className='container'>
            <div className='representations contacts-rep__representations'>
              <h6 className='h6'>{footer.representationsText}</h6>
              <ul className='representations__items contacts-rep__representations-items'>
                {footer.representations.map((el, i) => {
                  return (
                    <li
                      key={el.address}
                      className='representations__li contacts-rep__representations-li'
                    >
                      <span className='number representations__li-number'>
                        0{i + 1}
                      </span>
                      <p className='representation__li-text'>
                        <span>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={el.googleMaps}
                          >
                            {el.address}
                          </a>
                        </span>
                        <span>
                          <a href={'tel:' + el.phone.replace(/\D/gm, '')}>
                            {el.phone}
                          </a>
                        </span>
                        <span>
                          <a href={'mailto:' + el.email}>{el.email}</a>
                        </span>
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className='section if-question'>
          <div className='container section__container last'>
            <h2 className='h2'>{contacts.form.title}</h2>
            <Form classes='contacts-form' onSubmit={onSubmit}>
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
              <div className='form__bottom'>
                <p>
                  <span>*</span> {contacts.form.note}
                </p>
                <Button
                  text={contacts.form.button}
                  classes='form__btn'
                  type='submit'
                />
              </div>
            </Form>
          </div>
        </section>
      </main>
    </>
  )
}
