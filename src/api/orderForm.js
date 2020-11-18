import axios from 'axios'

export const fetchOrderForm = (data, cb) => {
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

  data.items.map((elem) => {
    return elem.items.forEach((el) => {
      if (el.selected) {
        finalData.answers.push({title: elem.title, value: el.name})
      }
    })
  })

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
      alert('Нажаль, виникла помилка:( Спробуйте ще раз.')
    }
  }

  request()
}
