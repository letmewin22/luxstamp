import React, {useState, useEffect} from 'react'
import {useResource} from '@/resource'
import TextContext from '@/context/TextContext'

import {Navbar} from '../Navbar/Navbar'
import {Header} from './Header/Header'
import {Instruction} from './sections/Instruction'
import {Order} from './sections/Order'
import {Advantages} from './sections/Advantages'
import {WhyWe} from './sections/Whywe'
import {Clients} from './sections/Clients'
import {Reviews} from './sections/Reviews'
import {Delivery} from './sections/Delivery'
import {CallToAction} from './sections/CallToAction'
import {Footer} from './Footer'

import './Landing.scss'

const resource = useResource()

export const Landing = () => {
  const [lang, setLang] = useState('uk')
  const languages = resource.text.read()

  useEffect(() => {
    document.title = languages[lang].title
  }, [languages, lang])

  const langSwitcher = (e) => {
    const langSwitcherText = lang === 'uk' ? 'Ua' : 'Ru'
    e.target.innerText = langSwitcherText
    lang === 'uk' ? setLang('ru') : setLang('uk')
  }

  return (
    <>
      <TextContext.Provider value={languages[lang]}>
        <Navbar langSwitcher={langSwitcher} />
        <Header />
        <main>
          <Instruction />
          <Order />
          <Advantages />
          <WhyWe />
          <Clients />
          <Reviews resource={resource} />
          <Delivery />
          <CallToAction />
          <Footer />
        </main>
      </TextContext.Provider>
    </>
  )
}
