import React from 'react'
import ReactDOM from 'react-dom'
import {CloseIcon} from './CloseIcon'

import './PopUp.scss'

export const PopUp = props => {
  const close = () => {
    props.visible.setVisibility(false)
  }

  const classes = ['pop-up', ...props.classes]
  props.visible.isVisible && classes.push('pop-up--active')

  const $popUp = (
    <div className={classes.join(' ')}>
      <div className='pop-up__overlay' onClick={close}></div>
      <div className='pop-up__item'>
        {props.children}
        <button className='pop-up__close' onClick={close}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )

  return ReactDOM.createPortal($popUp, document.body)
}
