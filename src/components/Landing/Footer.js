import React, { useContext } from 'react'
import {Logo} from '../Logo'
import {Button} from '../Button/Button'
import TextContext from '@/context/TextContext'


export const Footer = () => {

  const {footer} = useContext(TextContext)

  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__content'>
          <Logo />
          <div className='representations'>
            <h6 className='h6 representations-h6'>{footer.representationsText}</h6>
            <ul className='representations__items'>
              {footer.representations.map((el, i) => {
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
          <Button text={footer.button} classes='footer__btn' />
        </div>
        <div className='footer__bottom'>
          <div className='footer__bottom-line' />
          <div className='footer__bottom-content'>
            <span className='footer__bottom-copywrite'>
              {footer.copyright}
            </span>
            <a 
            href='https://emotion-agency.com' 
            target="_blank" 
            rel="noopener noreferrer" 
            className='footer__made-by'
            >
              by emotion
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
