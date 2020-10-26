import React from 'react'
import arrow0 from '../../../img/arrow0.svg'
import {SliderArrow} from '../../SliderArrow'

export const Reviews = () => {
  return (
    <section className='section reviews dg'>
      <div className='container section__container dg__container'>
        <div className='section__line mob-hidden' />
        <div className='dg__top'>
          <div className='dg__left'>
            <p className='dg__top-text'>
              Подивіться, що про нас кажуть постійні клієнти:
            </p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>Відгуки клієнтів</h2>
              <img src={arrow0} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='dg__bottom'>
          <div className='dg__bottom-item'>
            <div className='dg__left'>
              <div className='dg__left-content'>
                <div className='section__line' />
                <nav className='reviews__slider-nav'>
                  <button className='reviews__slider-nav-item reviews__slider-nav-item--left'>
                    <SliderArrow />
                  </button>
                  <button className='reviews__slider-nav-item reviews__slider-nav-item--right'>
                    <SliderArrow />
                  </button>
                </nav>
                <a href="/" className="btn reviews__facebook-btn">дивитись у facebook</a>
              </div>
            </div>
            <div className='dg__right'>
              <div className='section__line' />
              <p className='big-p reviews__review'>Все дуже сподобалось адже тут вам запропонують не лише смачну каву але розроблять стильний дизант печатки а швиткість виготовлення взагалі вражає поки ядопила каву все вже було готово. Рекомендую!</p>
              <span className="reviews__by">© Христина Рошка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
