import React from 'react'
import {Check} from './Check'

export const Checkbox = (props) => {
  return (
    <label className='order__custom-checkbox'>
      {props.type === 'with-img' && <img src={props.img} alt='' />}
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
