import React, {useContext} from 'react'
import TextContext from '@/context/TextContext'
import { OrderForm } from '../../OrderForm/OrderForm'

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
                <img src='/img/order/1.png' alt='order-img' />
              </div>
            </button>
          </li>
          <li className='order__li'>
            <button className='order__btn'>
              {order.items[1]}
              <div className='img-wrapper'>
                <img src='/img/order/2.png' alt='order-img' />
              </div>
            </button>
          </li>
          <li className='order__li'>
            <button className='order__btn'>
              {order.items[2]}
              <div className='img-wrapper'>
                <img src='/img/order/3.png' alt='order-img' />
              </div>
            </button>
          </li>
        </ul>
        <OrderForm/>
      </div>
    </section>
  )
}
