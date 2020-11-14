import React from 'react'
import './Button.scss'

export const Button = (props) => {
  const classes = ['btn']

  classes.push(props.classes)
  return (
    <>
      <button 
      type={props.type} 
      className={classes.join(' ')}
      >
        {props.text}
      </button>
    </>
  )
}


