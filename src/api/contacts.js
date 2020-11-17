import axios from 'axios'

export const fetchContacts = (data, cb) => {
  const url = '/api/contacts/telegram.php'

  const finalData = {
    name: '',
    phone: '',
    answers: '',
  }

  Object.keys(finalData).map((el, i) => finalData[el] = data[i].value)

  const request = async () => {
    try {
      await axios({
        method: 'post',
        url,
        data: 'param=' + JSON.stringify(finalData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      cb()
    }
    catch(error) {
      cb()
      console.log(error)
      alert('Нажаль, виникла помилка:( Спробуйте ще раз.')
    }
  }

  request()
}
