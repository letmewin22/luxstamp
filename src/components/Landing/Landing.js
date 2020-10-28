import React, {useState, useEffect} from 'react'

import {Navbar} from '../Navbar/Navbar'
import { Header } from './Header/Header'
import { Instruction } from './sections/Instruction'
import { Order } from './sections/Order'
import { Advantages } from './sections/Advantages'
import { WhyWe } from './sections/Whywe'
import { Clients } from './sections/Clients'
import { Reviews } from './sections/Reviews'
import { Delivery } from './sections/Delivery'
import { CallToAction } from './sections/CallToAction'
import { Footer } from './Footer'

import './Landing.scss'

const languages = {
  uk: {
    title: 'UK',
    h1: 'Виготовимо печатку, штамп або факсиміле, доки ви п’єте каву',
  },
  ru: {
    title: 'Rus',
    h1: 'Создадим печать, штамп або факсиміле, доки ви п’єте каву',
  },
}

export const Landing = () => {
  const [lang, setLang] = useState('uk')

  useEffect(() => {
    document.title = languages[lang].title
  }, [lang])

  const langSwitcher = (e) => {
    const langSwitcherText = lang === 'uk' ? 'Ua' : 'Ru'
    e.target.innerText = langSwitcherText
    lang === 'uk' ? setLang('ru') : setLang('uk')
  }

  return (
    <>
      <Navbar langSwitcher={langSwitcher} />
      <Header lang={languages[lang]}/>
      <main>
        <Instruction/>
        <Order/>
        <Advantages/>
        <WhyWe/>
        <Clients/>
        <Reviews/>
        <Delivery/>
        <CallToAction/>
        <Footer/>
      </main>
    </>
  )
}
