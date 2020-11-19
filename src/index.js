import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import './scss/index.scss'
import * as serviceWorker from './serviceWorker'

/**
* @todo
1. Сделать сообщение о том, что форма успешно отправлена
2. Сделать иконку лоадера, пока форма отправляется ??
3. Отправка цены на бэк
4. Выводить нормально цены в вёрстку на аксессуарах
* */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
