import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {Logo} from '../Logo'
import {Button} from '../Button/Button'
import TextContext from '@/context/TextContext'

export const Footer = () => {
  const {footer} = useContext(TextContext)
  const history = useHistory()

  const toContacts = () => {
    history.push('/contacts')
  }

  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__content'>
          <Logo />
          <div className='representations'>
            <h6 className='h6 representations-h6'>
              {footer.representationsText}
            </h6>
            <ul className='representations__items'>
              {footer.representations.map((el, i) => {
                return (
                  <li key={el.address} className='representations__li'>
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
          <ul className='social'>
            <li className='social__item'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/luxstamp_if/'
              >
                instagram
              </a>
            </li>
            <li className='social__item'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/luxstampIF/'
              >
                facebook
              </a>
            </li>
          </ul>
          <Button
            text={footer.button}
            classes='footer__btn'
            onClick={toContacts}
          />
        </div>
        <div className='footer__bottom'>
          <div className='footer__bottom-line' />
          <div className='footer__bottom-content'>
            <span className='footer__bottom-copywrite'>{footer.copyright}</span>
            <a
              href='https://emotion-agency.com'
              target='_blank'
              rel='noopener noreferrer'
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
