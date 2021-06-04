export const localizeForm = (inputs, contacts, setInputs) => {
  inputs.forEach((input, i) => {
    Object.keys(input).map(el => {
      return contacts.inputs[i][el] && (input[el] = contacts.inputs[i][el])
    })
  })
  setInputs([...inputs])
}
