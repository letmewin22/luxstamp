import React, {useState} from 'react'

export const Form = (props) => {

  const inputs = []

  props.children.forEach((_) => {
    inputs.push({
      field: '',
      value: ''
    })
  })

  const [values, setValues] = useState(inputs)

  const classes = ['form']

  props.classes && classes.push(...props.classes)

  const onChange = (e) => {

    values[0].field = e.target.dataset.id
    values[0].value = e.target.value

    setValues([...values])
  }

  console.log(values)

  return (
    <form className={classes.join(' ')}>
      {React.Children.map(props.children, (child) => (
        React.cloneElement(child, {onChange})
      )
      )}
    </form>
  )
}
