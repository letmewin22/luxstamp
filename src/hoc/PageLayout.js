import React, {useEffect, useState} from 'react'
import TextContext from '@/context/TextContext'
import {useResource} from '@/resource'
import {Navbar} from '@/components/Navbar/Navbar'
import {AnimationWrapper} from './AnimationWrapper'

const resource = useResource()

export const PageLayout = ({children}) => {
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
        <AnimationWrapper>{children}</AnimationWrapper>
      </TextContext.Provider>
    </>
  )
}
