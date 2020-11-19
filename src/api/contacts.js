import axios from 'axios'

export const fetchContacts = (data, cb) => {
  const tUrl = '/api/contacts/telegram.php'
  const mUrl = '/api/contacts/mail/mail.php'

  const finalData = {
    name: '',
    phone: '',
    answers: '',
  }

  Object.keys(finalData).map((el, i) => (finalData[el] = data[i].value))

  const request = async () => {
    try {
      await axios({
        method: 'post',
        url: tUrl,
        data: 'param=' + JSON.stringify(finalData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      await axios({
        method: 'post',
        url: mUrl,
        data: 'param=' + JSON.stringify(finalData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      cb()
    } catch (error) {
      console.log(error)
      alert('Нажаль, виникла помилка:( Спробуйте ще раз.')
    }
  }

  request()
}
