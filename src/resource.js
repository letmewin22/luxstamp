
import axios from 'axios'

const URI = 'http://localhost:3000/db.json'

export function useResource() {
  return {
    text: wrapPromise(fetchText()),
    reviews: wrapPromise(fetchReviews())
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
    }
  }
}

async function fetchText() {
 const text = await axios.get(URI)
 return await text.data.languages
}

async function fetchReviews() {
  const reviews = await axios.get(URI)
  return await reviews.data.reviews
}

