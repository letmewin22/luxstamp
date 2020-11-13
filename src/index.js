import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import './scss/index.scss'
import * as serviceWorker from './serviceWorker'

/**
* @todo
1. Уникальные инпуты для формы
2. Контакты
3. Подсчёт прайса
4. Форма отправки
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
