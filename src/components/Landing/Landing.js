import React, {useState, useEffect} from 'react'
import img from '../../img/1screen.png'
import Button from '../Button/Button'
import './Landing.scss'

const languages = {
  uk: {
    title: 'UK',
    h1: 'Виготовимо печатку, штамп або факсиміле, доки ви п’єте каву'
  },
  ru: {
    title: 'Rus',
    h1: 'Создадим печать, штамп або факсиміле, доки ви п’єте каву'
  }
}


const Landing = () => {

  const [lang] = useState('uk')

  useEffect(() => {
    const title = document.querySelector('title')
    title.innerHTML  = languages[lang].title
  }, [lang])

  return (
    <>
      <header  className="header">
        <div className="container header__container">
          <div className="header__left">
              <h1 className="h1">{languages[lang].h1}</h1>
              <p className="header__descriptor">Термін виготовлення — від 15 до 60 хвилин. Довічна гарантія на кліше. Доставка по місту та Україні.</p>
              <Button classes="header__btn" text="Замовити печатку"/>
          </div>
          <div className="header__right">
            <img src={img} alt="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Landing
