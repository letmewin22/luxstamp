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
  finalData.answers.map(answer => {
    return (answer.value = answer.value.join(', '))
  })

  console.log(finalData)

  const formData = new FormData()
  formData.append('file', data.file)

  const request = async () => {
    try {
      await axios({
        method: 'post',
        url: apiUrl + '/telegram.php',
        data: 'param=' + JSON.stringify(finalData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      await axios.post(apiUrl + '/telegramFile.php', formData)
      cb()
    } catch (error) {
      console.log(error)
      alert(text)
    }
  }

  request()
}
