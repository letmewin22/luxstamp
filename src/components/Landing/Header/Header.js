import React, {useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import imgBig from '../../../img/1screen-big.png'
import imgSmall from '../../../img/1screen-small.png'
import { useHeaderLoading } from './headerLoading'
import { useHeaderParallax } from './headerParallax'

export const Header = (props) => {
  const header = useRef(null)

  useHeaderLoading(header)
  useHeaderParallax(header)

  return (
    <header ref={header} className='header'>
      <div className='container header__container'>
        <div className='header__left'>
          <h1
            style={{opacity: 0, transform: 'translateY(40px)'}}
            className='h1'
          >
            {props.lang.h1}
          </h1>
          <p
            style={{opacity: 0, transform: 'translateY(40px)'}}
            className='header__descriptor'
          >
            Термін виготовлення — від 15 до 60 хвилин. Довічна гарантія на
            кліше. Доставка по місту та Україні.
          </p>
          <AnchorLink
            style={{opacity: 0, transform: 'translateY(60px)'}}
            href='#order'
            className='btn header__btn'
          >
            Замовити печатку
          </AnchorLink>
        </div>
        <div className='header__right'>
          <div
            style={{opacity: 0, transform: 'translateY(60px)'}}
            className='header__img-wrapper'
          >
            <img data-parallax='25' src={imgSmall} alt='header__img' />
            <img data-parallax='50' src={imgBig} alt='header__img' />
          </div>
        </div>
      </div>
    </header>
  )
}


