import React from 'react'
import { Button } from '../../Button/Button'
import arrow0 from '../../../img/arrow0.svg'

export const CallToAction = () => {
  return (
    <section className="section call-to-action dg">
      <div className="container section__container dg__container">
      <div className='section__line mob-hidden' />
        <div className='dg__top'>
          <div className='dg__left'>
            <p className='dg__top-text'>
            Навіщо писати, якщо можна штампувати?
            </p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>Замовляйте печатку чи штамп онлайн або приходьте до нашого офісу!</h2>
              <img src={arrow0} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='dg__bottom'>
          <div className='dg__bottom-item dg__bottom-item--cta'>
            <div className='dg__left'>
              <div className='dg__left-content'>
                <div className='section__line mob-hidden' />
                <Button text="У мене є питання!" classes='call-to-action__btn'/>
              </div>
            </div>
            <div className='dg__right'>
              <div className='section__line mob-hidden' />
              <p className='big-p call-to-action__text'>Ми розрахуємо вартість виробу, запропонуємо різні варіанти дизайну, та пригостимо смачною кавою з десертом. Якщо у вас є питання — залишайте заявку, ми зателефонуємо!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
