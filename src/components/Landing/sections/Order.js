import React, {useContext} from 'react'
import TextContext from '@/context/TextContext'
import { OrderForm } from '../../OrderForm/OrderForm'

import orderImg1 from '@/img/order/1.png'
import orderImg2 from '@/img/order/2.png'
import orderImg3 from '@/img/order/3.png'

export const Order = () => {
  const {order} = useContext(TextContext)

  return (
    <section id='order' className='section order'>
      <div className='container section__container order__container'>
        <h2 className='h2 order__h2'>{order.title}</h2>
        <ul className='order__items'>
          <li className='order__li'>
            <button className='order__btn'>
              {order.items[0]}
              <div className='img-wrapper'>
                <img src={orderImg1} alt='order-img' />
              </div>
            </button>
          </li>
          <li className='order__li'>
            <button className='order__btn'>
              {order.items[1]}
              <div className='img-wrapper'>
                <img src={orderImg2} alt='order-img' />
              </div>
            </button>
          </li>
          <li className='order__li'>
            <button className='order__btn'>
              {order.items[2]}
              <div className='img-wrapper'>
                <img src={orderImg3} alt='order-img' />
              </div>
            </button>
          </li>
        </ul>
        <OrderForm/>
      </div>
    </section>
  )
}
