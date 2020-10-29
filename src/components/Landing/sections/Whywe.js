import React, {useContext} from 'react'
import TextContext from '../../../context/TextContext'

export const WhyWe = () => {
  const {whywe} = useContext(TextContext)

  return (
    <section className='section why-we'>
      <div className='container section__container'>
        <div className='section__line mob-hidden' />
        <h2 className='h2 why-we__h2'>{whywe.title}</h2>
        <ul className='why-we__items'>
          {whywe.items.map((item) => {
            return (
              <li key={item.title} className='why-we__li'>
                <div className='why-we__li-left'>
                  <div className='section__line' />
                  <h5 className='h5 why-we__h5'>{item.title}</h5>
                </div>

                <div className='why-we__li-right'>
                  <div className='section__line mob-hidden' />
                  <p className='why-we__text'>{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
