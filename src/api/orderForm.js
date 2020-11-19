import axios from 'axios'

export const fetchOrderForm = (data, cb, text) => {
  const apiUrl = '/api/order'

  const finalData = {
    name: '',
    phone: '',
    city: '',
    delivery: '',
    messanger: '',
    comment: '',
    answers: [],
  }

  Object.keys(finalData).map((el, i) => {
    return data.form[i] && (finalData[el] = data.form[i].value)
  })

  data.items.map((elem, i) => {
    return elem.items.forEach(el => {
      if (el.selected) {
        if (finalData.answers[i] && finalData.answers[i].title) {
          finalData.answers[i].value.push(el.name)
        } else {
          finalData.answers.push({title: elem.title, value: [el.name]})
        }
      }
    })
  })

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
        url: apiUrl + '/telegram.php',
        data: formData,
      })
      cb()
    } catch (error) {
      console.log(error)
      alert(text)
    }
  }

  request()
}
