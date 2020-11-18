import React, {useCallback, useContext, useEffect, useState} from 'react'
import TextContext from '@/context/TextContext'
import {OrderForm} from '../../OrderForm/OrderForm'
import {signetData, stampData, facsimileData} from '@/data'
import {generateItems} from '@/generateFormItems'
import {fetchOrderForm} from '@/api/orderForm'

export const Order = (props) => {
  const {order, form} = useContext(TextContext)

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
      price: 420,
      name: 'Печатки',
      active: false,
      items: [],
    },
    {
      id: 2,
      price: 350,
      name: 'Штампы',
      active: false,
      items: [],
    },
    {
      id: 3,
      price: 280,
      name: 'Факсимиле',
      active: false,
      items: [],
    },
  ])

  const [files, setFiles] = useState(null)

  const onClickHandler = useCallback(
    (i) => {
      items.forEach((item) => {
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

  const onSubmit = (data, cb) => {
    const finalData = {
      form: data,
      file: files,
      items: [],
    }
    items.forEach((item) => {
      if (item.active) {
        finalData.items = item.items
      }
    })
    fetchOrderForm(finalData, cb)
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
          (item) =>
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
