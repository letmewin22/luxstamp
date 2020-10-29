import React, { useContext } from 'react'
import TextContext from '../../../context/TextContext'

export const Instruction = () => {

  const {instruction} = useContext(TextContext)

  const howItems = instruction.items
  const onlineItems = instruction.online.items
  const officeItems = instruction.offline.items

  return (
    <section className='section instruction'>
      <div className='container section__container instruction__container'>
        <div className='instruction__left'>
          <div className='section__line mob-hidden' />
            <h2 className='h2 instruction__h2'>{instruction.h2}</h2>
        </div>
        <div className='instruction__right'>
          <ul className='instruction__items'>
            {howItems.map(item => {
              return (
                <li key={item.title} className='instruction__li'>
                  <div className='section__line' />
                  <h3 className='h3 instruction__h3'>{item.title}</h3>
                  <p className='instruction__text'>{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='container section__container instruction__container'>
        <div className='instruction__left'>
          <div className='section__line' />
          <h4 className='h4 instruction__h4'>{instruction.online.title}</h4>
          <p className='instruction__text'>{instruction.online.descriptor}</p>
          <ul className='instruction__steps-list'>
            {onlineItems.map((item, i) => {
              return (
                <li key={item.text} className='instruction__steps-li'>
                  <span className='number instruction__steps-number'>
                    0{i + 1}
                  </span>
                  {item.text}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='instruction__right instruction__right--big-m'>
          <div className='section__line' />
          <h4 className='h4 instruction__h4'>{instruction.offline.title}</h4>
          <p className='instruction__text'>{instruction.offline.descriptor}</p>
          <ul className='instruction__steps-list'>
            {officeItems.map((item, i) => {
              return (
                <li key={item.text} className='instruction__steps-li'>
                  <span className='number instruction__steps-number'>
                    0{i + 1}
                  </span>
                  {item.text}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
