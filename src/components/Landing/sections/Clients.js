import React, {useContext, useState} from 'react'
import TextContext from '../../../context/TextContext'
import {useResize} from '../../../hooks/Resizer'

import img1 from '../../../img/clients/1.png'
import img2 from '../../../img/clients/2.png'
import img3 from '../../../img/clients/3.png'
import img4 from '../../../img/clients/4.png'
import img5 from '../../../img/clients/5.png'
import img6 from '../../../img/clients/6.png'
import img7 from '../../../img/clients/7.png'

export const Clients = () => {
  const {clients} = useContext(TextContext)

  const clientsImgs = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
    {img: img6},
    {img: img7},
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
      {isMobile && <span className='clients__swipe-to'>свайпайте вбік</span>}
      <ul className='clients__items'>
        {clientsImgs.map((client) => {
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
