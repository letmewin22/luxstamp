import React from 'react'

import img1 from '../../../img/clients/1.png'
import img2 from '../../../img/clients/2.png'
import img3 from '../../../img/clients/3.png'
import img4 from '../../../img/clients/4.png'
import img5 from '../../../img/clients/5.png'
import img6 from '../../../img/clients/6.png'
import img7 from '../../../img/clients/7.png'

export const Clients = () => {

  const clients = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
    {img: img6},
    {img: img7}
  ]

  return (
    <section className='section clients'>
      <div className='container section__container'>
        <h2 className='h2'>Наші клієнти</h2>
        <p className='clients-description'>
          Ми виготовляємо печатки для фізичних осіб-підприємців, компаній,
          держустанов, адвокатів, нотаріусів та лікарів.
        </p>
        <ul className='clients__items'>
          {clients.map(client => {
            return (
              <li key={client.img} className='clients__li'>
                <img src={client.img} alt='client' />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
