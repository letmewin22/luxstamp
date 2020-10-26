import React from 'react'
import {Logo} from '../Logo'
import {Button} from '../Button/Button'

export const Footer = () => {

  const representations = [
    {
      address: 'Івано-Франківськ, пл. Ринок 14 (3 поверх)',
      googleMaps: '/',
      phone: '+38 (068) 271-77-78',
      email: 'luxstampif@gmail.com',
    },
    {
      address: 'Новоград-Волинський, пл. Ринок 14 (3 поверх)',
      googleMaps: '/',
      phone: '+38 (068) 271-77-78',
      email: 'luxstampif@gmail.com',
    },
    {
      address: 'Бахмач, пл. Ринок 14 (3 поверх)',
      googleMaps: '/',
      phone: '+38 (068) 271-77-78',
      email: 'luxstampif@gmail.com',
    }
  ]

  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__content'>
          <Logo />
          <div className='representations'>
            <h6 className='h6 representations-h6'>Представництва</h6>
            <ul className='representations__items'>
              {representations.map((el, i) => {
                return (
                  <li key={el.address} className='representations__li'>
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
          <ul className='social'>
            <li className='social__item'>
              <a href='/'>instagram</a>
            </li>
            <li className='social__item'>
              <a href='/'>facebook</a>
            </li>
          </ul>
          <Button text='Зв’язатися з нами' classes='footer__btn' />
        </div>
        <div className='footer__bottom'>
          <div className='footer__bottom-line' />
          <span className='footer__bottom-copywrite'>
            ©2020 Luxstamp. Усі права захищено
          </span>
        </div>
      </div>
    </footer>
  )
}
