import React from 'react'
import arrow0 from '../../../img/arrow0.svg'

export const Advantages = () => {

  const advantages = [
    {
      number: '11',
      desc: 'років',
      text: 'виготовляємо печатки',
    },
    {
      number: '3 567',
      desc: 'клієнтів',
      text: 'задоволені нашою роботою',
    },
    {
      number: '99',
      desc: 'років',
      text: 'гарантія на кліше',
    },
    {
      number: '23 528',
      desc: 'відтисків',
      text: 'зроблено нашими печатками',
    }
  ]

  return (
    <section id="advantages" className='section advantages dg'>
      <div className='container section__container dg__container'>
        <div className='section__line mob-hidden' />
        <div className='dg__top'>
          <div className='dg__left'>
            <p className='dg__top-text'>Трохи цифр</p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>
                Переваги печаток та штампів LuxStamp
              </h2>
              <img src={arrow0} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='dg__bottom'>
          {advantages.map(advantage => {
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
