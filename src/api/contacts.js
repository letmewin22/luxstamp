export const fetchContacts = (data, cb) => {
  console.log(data)
  const url = 'http://emotion-agency.com/drafts/api/telegram.php'

  const finalData = {
    name: data[0].value,
    phone: data[1].value,
    answers: data[2].value,
  }

  const request = async () => {
    try {
      await fetch(url, {
        method: 'POST',
        body: 'param=' + JSON.stringify(finalData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      cb()
    }
    catch(error) {
      console.log(error)
      alert('Нажаль, виникла помилка:( Спробуйте ще раз.')
    }
  }

  request()
}
