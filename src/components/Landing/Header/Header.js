import React, {useContext, useRef} from 'react'
import TextContext from '@/context/TextContext'

import {useHeaderLoading} from './headerLoading'
import {useHeaderParallax} from './headerParallax'

export const Header = () => {
  const $header = useRef(null)

  useHeaderLoading($header)
  useHeaderParallax($header)

  const {header} = useContext(TextContext)

  return (
    <header ref={$header} className='header'>
      <div className='container header__container'>
        <div className='header__left'>
          <h1
            style={{opacity: 0, transform: 'translateY(40px)'}}
            className='h1'
          >
            {header.h1}
          </h1>
          <p
            style={{opacity: 0, transform: 'translateY(40px)'}}
            className='header__descriptor'
          >
            {header.descriptor}
          </p>
          <a
            style={{opacity: 0, transform: 'translateY(60px)'}}
            href='#order'
            className='btn header__btn'
          >
            {header.button}
          </a>
        </div>
        <div className='header__right'>
          <div
            style={{opacity: 0, transform: 'translateY(60px)'}}
            className='header__img-wrapper'
          >
            <img
              data-parallax='25'
              src='/img/1screen-big.png'
              alt='header__img'
            />
            <img
              data-parallax='50'
              src='/img/1screen-small.png'
              alt='header__img'
            />
          </div>
        </div>
      </div>
    </header>
  )
}
