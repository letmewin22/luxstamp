import React from 'react'
import {Check} from './Check'


export const Checkbox = (props) => {
  return (
    <label data-unik='true' className='order__custom-checkbox'>
      {props.type === 'with-img' && (<img src={props.img} alt="" />)}
      <input className='order__checkbox' type='checkbox' />
      <div className='order__fake-checkbox-wrapper'>
        <div className='order__fake-checkbox'>
          <Check />
        </div>
        <span className='order__fake-checkbox-text'>{props.text}</span>
      </div>
    </label>
  )
}
