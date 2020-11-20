import React from 'react'
import {CloseIcon} from './CloseIcon'
import {MailIcon} from './MailIcon'

import './PopUp.scss'

export const PopUp = ({bigText, text, visible}) => {
  const close = () => {
    visible.setIsSuccess(false)
  }

  const classes = ['pop-up']
  visible.isSuccess && classes.push('pop-up--active')

  return (
    <div className={classes.join(' ')}>
      <div className='pop-up__overlay' onClick={close}></div>
      <div className='pop-up__item'>
        <div className='pop-up__icon'>
          <MailIcon />
        </div>
        <p className='pop-up__big-text'>{bigText}</p>
        <p className='pop-up__text'>{text}</p>
        <button className='pop-up__close' onClick={close}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
