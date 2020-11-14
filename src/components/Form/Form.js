import React from 'react'

export const Form = (props) => {

  const children = props.children

  const classes = ['form']

  props.classes && classes.push(...props.classes)

  return (
    <form className={classes.join(' ')}>
      {children}
    </form>
  )
}
