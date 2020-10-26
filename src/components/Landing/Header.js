import React from 'react'
import { Button } from '../Button/Button'

import img from '../../img/1screen.png'

export const Header = (props) => {
  return (
    <header className='header'>
    <div className='container header__container'>
      <div className='header__left'>
        <h1 className='h1'>{props.lang.h1}</h1>
        <p className='header__descriptor'>
          Термін виготовлення — від 15 до 60 хвилин. Довічна гарантія на
          кліше. Доставка по місту та Україні.
        </p>
        <Button classes='header__btn' text='Замовити печатку' />
      </div>
      <div className='header__right'>
        <img src={img} alt='' />
      </div>
    </div>
  </header>
  )
}
