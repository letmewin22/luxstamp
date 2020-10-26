import React from 'react'

import orderImg1 from '../../../img/order/1.png'
import orderImg2 from '../../../img/order/2.png'
import orderImg3 from '../../../img/order/3.png'

export const Order = () => {
  return (
    <section className='section order'>
      <div className='container section__container order__container'>
        <h2 className='h2 order__h2'>Онлайн-замовлення</h2>
        <ul className='order__items'>
          <li className='order__li'>
            <button className='order__btn'>
              Печатка
              <div className='img-wrapper'>
                <img src={orderImg1} alt='order-img' />
              </div>
            </button>
          </li>
          <li className='order__li'>
            <button className='order__btn'>
              Штамп
              <div className='img-wrapper'>
                <img src={orderImg2} alt='order-img' />
              </div>
            </button>
          </li>
          <li className='order__li'>
            <button className='order__btn'>
              Факсиміле
              <div className='img-wrapper'>
                <img src={orderImg3} alt='order-img' />
              </div>
            </button>
          </li>
        </ul>
        <div className='order__form-wrapper'></div>
      </div>
    </section>
  )
}
