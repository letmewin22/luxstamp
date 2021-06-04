import axios from 'axios'

export const fetchPopup = (data, cb, text, loader) => {
  loader(true)
  const tUrl = '/api/contacts/telegram.php'
  const mUrl = '/api/contacts/mail/mail.php'

  const finalData = {
    phone: '',
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
      window.dataLayer.push({event: 'form_sent'})
    } catch (error) {
      console.error(error)
      alert(text)
    } finally {
      loader(false)
    }
  }

  request()
}
