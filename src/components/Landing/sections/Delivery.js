import React, { useContext } from 'react'
import TextContext from '../../../context/TextContext'

export const Delivery = () => {

  const {delivery} = useContext(TextContext)

  return (
    <section id="delivery" className='section delivery'>
      <div className='container section__container'>
        <div className='section__line mob-hidden' />
        <h2 className='h2 delivery__h2'>{delivery.title}</h2>
        <ul className='delivery__items'>
          {delivery.items.map((item) => {
            return (
              <li key={item.title} className='delivery__li'>
                <div className='delivery__li-left'>
                  <div className='section__line' />
                  <h5 className='h5 delivery__h5'>{item.title}</h5>
                </div>

                <div className='delivery__li-right'>
                  {item.items.map((el) => {
                    return (
                      <div key={el.text} className='delivery__li-item'>
                        <div className='section__line mob-hidden' />
                        {el.title && <h3 className='h3 delivery__h3'>{el.title}</h3>} 
                        <p className='delivery__text'>{el.text}</p>
                      </div>
                    )
                  })}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
