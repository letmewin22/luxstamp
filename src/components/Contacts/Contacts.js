import React, {useContext} from 'react'
import TextContext from '@/context/TextContext'

import './Contacts.scss'
import {Input, Form} from '../Form/'

export const Contacts = () => {
  const {footer} = useContext(TextContext)

  return (
    <>
      <header className='contacts-header'>
        <div className='container contacts-header__container'>
          <h1 className='h1'>Контакти</h1>
          <div className='contacts-header__items'>
            <div className='contacts-header__item'>
              <a href='tel:+380682717778'>+38 (068) 271 7778</a>
              <a href='mailto:luxstampif@gmail.com'>luxstampif@gmail.com</a>
            </div>
            <div className='contacts-header__item'>
              <h4>Графік роботи:</h4>
              <span>Пн-Пт з 09.00 до 17.00</span>
              <span>Обід 13.00-14.00</span>
              <span>Субота - вихідний</span>
              <span>Неділя - вихідний</span>
            </div>
            <div className='contacts-header__item'>
              <span>
                Ми розуміємо специфіку роботи наших клієнтів, а саме
                ненормованість робочого дня, і йдемо на зустріч!
              </span>
              <span>
                За Вашим проханням можемо прийти швидше, або затриматись. Просто
                повідомте нас!
              </span>
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
                          <a href={el.googleMaps}>{el.address}</a>
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
            <h2 className='h2'>Якщо є питання:</h2>
            <Form classes={['contacts-form']}>
              <Input
                type='text'
                id='name'
                placeholder="Ваше ім’я"
                text="Ім'я"
              />
              <Input
                type='phone'
                id='phone'
                placeholder="Номер телефону"
                text="Телефон"
                required={true}
              />
            </Form>
          </div>
        </section>
      </main>
    </>
  )
}
