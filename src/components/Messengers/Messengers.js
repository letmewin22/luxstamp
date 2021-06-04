import React from 'react'
import './Messengers.scss'
import {TelegramIcon} from './TelegramIcon'
import {ViberIcon} from './ViberIcon'

export const Messengers = props => {
  return (
    <div className={`messengers ${props.classes.join(' ')}`}>
      <a
        href='https://t.me/luxstamp_UA'
        aria-label='Viber'
        target='_blank'
        rel='noopener noreferrer'
        className='messengers__link'
      >
        <TelegramIcon />
      </a>
      <a
        href='viber://chat?number=%2B380631902764'
        aria-label='Viber'
        target='_blank'
        rel='noopener noreferrer'
        className='messengers__link'
      >
        <ViberIcon />
      </a>
    </div>
  )
}
