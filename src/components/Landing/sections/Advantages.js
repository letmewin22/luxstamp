import React, {useContext} from 'react'
import TextContext from '../../../context/TextContext'
import arrow0 from '../../../img/arrow0.svg'

export const Advantages = () => {
  const {advantages} = useContext(TextContext)

  return (
    <section id='advantages' className='section advantages dg'>
      <div className='container section__container dg__container'>
        <div className='section__line mob-hidden' />
        <div className='dg__top'>
          <div className='dg__left'>
            <p className='dg__top-text'>{advantages.descriptor}</p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>{advantages.title}</h2>
              <img src={arrow0} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='dg__bottom'>
          {advantages.items.map((advantage) => {
            return (
              <div key={advantage.text} className='dg__bottom-item'>
                <div className='dg__left'>
                  <div className='dg__left-content'>
                    <div className='section__line' />
                    <span className='advantages__number'>
                      {advantage.number}
                    </span>
                    <span className='advantages__number-desc'>
                      {advantage.desc}
                    </span>
                  </div>
                </div>
                <div className='dg__right'>
                  <div className='section__line mob-hidden' />
                  <p className='big-p'>{advantage.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
