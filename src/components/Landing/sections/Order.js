import React, {useContext, useState} from 'react'
import TextContext from '@/context/TextContext'
import {OrderForm} from '../../OrderForm/OrderForm'
import { signetData } from '@/data/signetData'


export const Order = (props) => {
  const {order, form} = useContext(TextContext)

  const formData = props.resource.form.read()

  formData[0].items.forEach((el, i) => {
    let formData = signetData[el.id]

    el.items.forEach((data, j) => {
      formData.items[j] = {
        id: j + 1,
        exclude: [],
        name: '',
        img: '',
        selected: false
      }
      data.name && (formData.items[j].name =data.name)
      data.img && (formData.items[j].img = data.img)
      data.price && (formData.items[j].price = data.price)
      data.type && (formData.items[j].type = data.type)
    })

  })

  signetData.forEach((el, i) => {
    el.title = form.signet.screens[i].title
    el.items.forEach((item, j) => {
      form.signet.screens[i].items[j] && 
      (item.name = form.signet.screens[i].items[j])
    })
  })


  const [items, setItems] = useState([{
        id: 1,
        price: 420,
        name: 'Печатки',
        active: false,
        items: signetData
      },
      {
        id: 2,
        price: 350,
        name: 'Штампы',
        active: false,
        items: []
      },
      {
        id: 3,
        price: 280,
        name: 'Факсимиле',
        active: false,
        items: []
      }])

  const onClickHandler = (i) => {
    items.forEach(item => {
      item.active = false
      item.id === i+1 && (item.active = true)
    })
    setItems([...items])
  }

  return (
    <section id='order' className='section order'>
      <div className='container section__container order__container'>
        <h2 className='h2 order__h2'>{order.title}</h2>
        <ul className='order__items'>
          {order.items.map((item, i) => (
            <li key={item} className={`order__li ${item.active && 'active'}`}>
              <button onClick={onClickHandler.bind(null, i)} className='order__btn'>
                {item}
                <div className='img-wrapper'>
                  <img src={`/img/order/${i+1}.png`} alt='order-img' />
                </div>
              </button>
            </li>
          ))}
        </ul>
        {items.map(item => item.active && (
          <OrderForm key={item.id} data={item.items} />
        ))}
      </div>
    </section>
  )
}
