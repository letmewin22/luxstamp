import React, {useContext} from 'react'
import {Button} from '../../Button/Button'
import TextContext from '@/context/TextContext'

export const CallToAction = () => {
  const {cta} = useContext(TextContext)

  return (
    <section className='section call-to-action dg'>
      <div className='container section__container dg__container'>
        <div className='section__line mob-hidden' />
        <div className='dg__top'>
          <div className='dg__left'>
            <p className='dg__top-text'>{cta.descriptor}</p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>{cta.title}</h2>
              <img src='/img/arrow0.svg' alt='arrow' />
            </div>
          </div>
        </div>
        <div className='dg__bottom'>
          <div className='dg__bottom-item dg__bottom-item--cta'>
            <div className='dg__left'>
              <div className='dg__left-content'>
                <div className='section__line mob-hidden' />
                <Button text={cta.button} classes='call-to-action__btn' />
              </div>
            </div>
            <div className='dg__right'>
              <div className='section__line mob-hidden' />
              <p className='big-p call-to-action__text'>{cta.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
