import axios from 'axios'

export const fetchOrderForm = (data, cb, text, loader) => {
  loader(true)

  const apiUrl = '/api/order'

  const finalData = {
    name: '',
    phone: '',
    city: '',
    delivery: '',
    messanger: '',
    comment: '',
    type: data.type,
    price: data.price,
    answers: [],
  }
  Object.keys(finalData).map((el, i) => {
    return data.form[i] && (finalData[el] = data.form[i].value)
  })

  data.items.map(elem => finalData.answers.push({title: elem.title, value: []}))

  finalData.answers.forEach((elem, i) => {
    data.items[i].items.forEach(el => {
      if (el.selected) {
        elem.value.push(el.name)
      }
    })
  })

  finalData.answers = finalData.answers.filter(el => el.value.length !== 0)

  finalData.answers = JSON.stringify(finalData.answers)

  const formData = new FormData()

  formData.append('file', data.file)

  Object.keys(finalData).map(el => {
    return formData.append(el, finalData[el])
  })

  const request = async () => {
    try {
      await axios({
        method: 'post',
        url: apiUrl + '/mail/mail.php',
        data: formData,
      })
      await axios({
        method: 'post',
        url: apiUrl + '/telegram/telegram.php',
        data: formData,
      })
      cb()
    } catch (error) {
      console.error(error)
      alert(text)
    } finally {
      loader(false)
    }
  }

  request()
}
