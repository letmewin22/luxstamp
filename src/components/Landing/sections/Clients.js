import React, {useContext, useState} from 'react'
import TextContext from '@/context/TextContext'
import {useResize} from '@/hooks/Resizer'
import LangContext from '@/context/LangContext'

export const Clients = () => {
  const {clients} = useContext(TextContext)
  const lang = useContext(LangContext)

  const clientsImgs = [
    {img: '/img/clients/1.png'},
    {img: '/img/clients/2.png'},
    {img: '/img/clients/3.png'},
    {img: '/img/clients/4.png'},
    {img: '/img/clients/5.png'},
    {img: '/img/clients/6.png'},
    {img: '/img/clients/7.png'},
  ]

  const [isMobile, setIsMobile] = useState(false)

  useResize(() => {
    window.innerWidth < 1302 ? setIsMobile(true) : setIsMobile(false)
  })

  return (
    <section id='clients' className='section clients'>
      <div className='container section__container'>
        <h2 className='h2'>{clients.title}</h2>
        <p className='clients-description'>{clients.descriptor}</p>
      </div>
      {isMobile && (
        <span className='clients__swipe-to'>
          {lang === 'ru' ? 'листайте вбок' : 'свайпайте вбік'}
        </span>
      )}
      <ul className='clients__items'>
        {clientsImgs.map(client => {
          return (
            <li key={client.img} className='clients__li'>
              <img src={client.img} alt='client' />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
