
import axios from 'axios'

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
 return await axios.get('http://localhost:3004/languages')
}

async function fetchReviews() {
  return await axios.get('http://localhost:3004/reviews')
 }

