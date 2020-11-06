import React from 'react'
import {Check} from './Check'

export const Checkbox = (props) => {
  return (
    <label className='order__custom-checkbox'>
      {props.type === 'with-img' && <img className='order__img' src={props.img} alt='' />}
      {props.type === 'card' && (
        <div className='order__card'>
          <img className='order__card-img' src={props.img} alt='' />
          <div className="order__card-price">{props.price}</div>
        </div>
      )}
      <input
        data-screen-id={props.screenID}
        checked={props.selected}
        data-name={props.name}
        onChange={props.onChange}
        className='order__checkbox'
        type='checkbox'
      />
      <div className='order__fake-checkbox-wrapper'>
        <div className='order__fake-checkbox'>
          <Check />
        </div>
        <span className='order__fake-checkbox-text'>{props.name}</span>
      </div>
    </label>
  )
}
