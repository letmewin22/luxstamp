import React, {useEffect, useState} from 'react'
import {useResource} from '@/resource'
import {Navbar} from '@/components/Navbar/Navbar'
import {AnimationWrapper} from './AnimationWrapper'
import {useCallback} from 'react'
import LangContext from '@/context/LangContext'
import TextContext from '@/context/TextContext'

const resource = useResource()

export const PageLayout = ({children}) => {
  const [lang, setLang] = useState('uk')
  const languages = resource.text.read()

  useEffect(() => {
    setLang(JSON.parse(localStorage.getItem('lang') || '"uk"'))
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang))
    document.title = languages[lang].title
  }, [languages, lang])

  const langSwitcher = useCallback(
    e => {
      const langSwitcherText = lang === 'uk' ? 'Ua' : 'Ru'
      e.target.innerText = langSwitcherText
      lang === 'uk' ? setLang('ru') : setLang('uk')
    },
    [lang]
  )

  return (
    <>
      <LangContext.Provider value={lang}>
        <TextContext.Provider value={languages[lang]}>
          <Navbar langSwitcher={langSwitcher} />
          <AnimationWrapper>{children}</AnimationWrapper>
        </TextContext.Provider>
      </LangContext.Provider>
    </>
  )
}
