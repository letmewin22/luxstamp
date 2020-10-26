import React from 'react'
import {Logo} from '../Logo'
import {Button} from '../Button/Button'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__content'>
          <Logo />
          <div className='representations'>
            <h6 className='h6 representations-h6'>Представництва</h6>
            
            <ul className='representations__items'>
              <li className='representations__li'>
              <span className='number representations__li-number'>01</span>
              <p className='representation__li-text'>Обираєте потрібний вид та дизайн печатки.</p>
              
              </li>
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
