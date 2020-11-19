import axios from 'axios'

const URI = '/db'

export function useResource() {
  return {
    text: wrapPromise(fetchText()),
    reviews: wrapPromise(fetchReviews()),
    form: wrapPromise(fetchForm()),
  }
}

function wrapPromise(promise) {
  let status = 'pending'
  let result
  const suspender = promise.then(
    r => {
      result = r
      status = 'success'
    },
    e => {
      result = e
      status = 'error'
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

async function fetchText() {
  const text = await axios.get(URI + '/languages.json')
  return await text.data.languages
}

async function fetchReviews() {
  const reviews = await axios.get(URI + '/reviews.json')
  return await reviews.data.reviews
}

async function fetchForm() {
  const form = await axios.get(URI + '/form.json')
  return await form.data.form
}
