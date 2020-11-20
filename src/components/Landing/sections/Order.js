import React, {useCallback, useContext, useEffect, useState} from 'react'
import TextContext from '@/context/TextContext'
import {OrderForm} from '../../OrderForm/OrderForm'
import {signetData, stampData, facsimileData} from '@/data'
import {generateItems} from '@/generateFormItems'
import {fetchOrderForm} from '@/api/orderForm'

export const Order = props => {
  const {order, form, sendForm} = useContext(TextContext)

  const formData = props.resource.form.read()

  const forms = [signetData, stampData, facsimileData]

  useEffect(generateItems.bind(null, forms, formData), [])

  forms.forEach((elem, k) => {
    elem.forEach((el, i) => {
      form[k].screens[i] && (el.title = form[k].screens[i].title)
      el.contentText && (el.contentText = form[k].screens[i].contentText)
      el.contentBtn && (el.contentBtn = form[k].screens[i].contentBtn)
      el.items.forEach((item, j) => {
        if (form[k].screens[i].items[j]) {
          item.name = form[k].screens[i].items[j]
        }
        if (form[k].screens[i].itemsTypeText) {
          item.typeText = form[k].screens[i].itemsTypeText[j]
        }
      })
    })
  })

  const [items, setItems] = useState([
    {
      id: 1,
      price: formData[0].price,
      name: 'Печатки',
      active: false,
      items: [],
    },
    {
      id: 2,
      price: formData[1].price,
      name: 'Штампи',
      active: false,
      items: [],
    },
    {
      id: 3,
      price: formData[2].price,
      name: 'Факсимиле',
      active: false,
      items: [],
    },
  ])

  const [files, setFiles] = useState(null)

  const onClickHandler = useCallback(
    i => {
      items.forEach(item => {
        item.active = false
        item.items = []
        if (item.id === i + 1) {
          item.active = true
          item.items = forms[i]
        }
      })
      setItems([...items])
    },
    [forms, items]
  )

  const onSubmit = (data, cb, loader) => {
    const price = document.querySelector('.order__final-price span').innerText
    const finalData = {
      form: data,
      file: files,
      type: '',
      price,
      items: [],
    }
    items.forEach(item => {
      if (item.active) {
        finalData.items = item.items
        finalData.type = item.name
      }
    })
    fetchOrderForm(finalData, cb, sendForm.errorMessage, loader)
  }

  return (
    <section id='order' className='section order'>
      <div className='container section__container order__container'>
        <h2 className='h2 order__h2'>{order.title}</h2>
        <ul className='order__items'>
          {order.items.map((item, i) => (
            <li key={item} className='order__li'>
              <button
                onClick={onClickHandler.bind(null, i)}
                className={`order__btn ${items[i].active && 'active'}`}
              >
                {item}
                <div className='img-wrapper'>
                  <img src={`/img/order/${i + 1}.png`} alt='order-img' />
                </div>
              </button>
            </li>
          ))}
        </ul>
        {items.map(
          item =>
            item.active && (
              <OrderForm
                onSubmit={onSubmit}
                filesState={{files, setFiles}}
                key={item.id}
                data={[...item.items]}
                price={item.price}
              />
            )
        )}
      </div>
    </section>
  )
}
