import React from 'react'
import './CallbackBtn.scss'

export const CallbackBtn = props => {
  return (
    <button onClick={props.onClick} className='callback-btn'>
      <div className='callback-btn__icon'>
        <svg
          width='21'
          height='30'
          viewBox='0 0 21 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.6272 8.07139C14.4656 9.10767 12.6474 12.9173 12.1327 13.8894C11.4432 15.1826 8.80626 19.0577 7.6751 19.9155L6.74743 20.5485L4.49829 19.8156L0 24.5723L0.154412 25.8132L2.69562 29.1826L3.79207 30C3.79207 30 19.9203 19.7728 21 1.40987C21 1.40987 20.6816 1.05651 20.0699 0.374777L15.8338 0L14.4453 0.540155L13.2136 6.4188L14.5626 7.88221'
            fill='white'
          />
        </svg>
      </div>
    </button>
  )
}
