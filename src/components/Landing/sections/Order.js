import React, {useCallback, useContext, useState} from 'react'
import TextContext from '@/context/TextContext'
import {OrderForm} from '../../OrderForm/OrderForm'
import { signetData, stampData, facsimileData } from '@/data'
import { keysGenerator } from '@/utils/keysGenerator'


export const Order = (props) => {
  const {order, form} = useContext(TextContext)

  const formData = props.resource.form.read()

  const forms = [signetData, stampData, facsimileData]


  formData.forEach((item, k) => {
    item.items.forEach(el => {
      let formData = forms[k][el.id]
  
      el.items.forEach((data, j) => {
        formData.items[j] = {
          id: j + 1,
          key: '',
          exclude: [],
          name: '',
          img: '',
          selected: false,
          exists: true
        }
  
        const fields = ['name', 'img', 'price', 'type']
        
        fields.forEach(item => {
          data[item] && (formData.items[j][item] = data[item])
        })

        formData.items[j].key = keysGenerator(10)

        if (data.org) {
          const orgs = data.org.split('-')
          const orgField = forms[0][2]
          
          const orgTypes = ['fop', 'tov', 'lawyer', 'doctor']
          

          orgTypes.forEach((orgType, i) => {
            if (!orgs.includes(orgType)) {
              if (!orgField.items[i].exclude.includes(formData.items[j].key)) {
                orgField.items[i].exclude.push(formData.items[j].key)
              }
            }
          })
        }

        if (data.size) {
          const sizesDb = data.size
          const sizeField = forms[1][2]
          const sizes = ['47x18', '58x22', '60x40', 'Інший розмір']

          sizes.forEach((size, i) => {
            if (size !== sizesDb) {
              if(!sizeField.items[i].exclude.includes(formData.items[j].key)) {
                sizeField.items[i].exclude.push(formData.items[j].key)
              }
            }
          })
        }
      })
    })
  })


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



  const [items, setItems] = useState([{
        id: 1,
        price: 420,
        name: 'Печатки',
        active: false,
        items: []
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

  const onClickHandler = useCallback((i) => {
    items.forEach(item => {
      item.active = false
      item.items = []
      console.log(forms[i])
      if (item.id === i+1) {
        item.active = true
        item.items = forms[i]
      }
    })
    setItems([...items])
  }, [forms, items])

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
                  <img src={`/img/order/${i+1}.png`} alt='order-img' />
                </div>
              </button>
            </li>
          ))}
        </ul>
        {items.map(item => item.active && (
          <OrderForm key={item.id} data={[...item.items]} price={item.price} />
        ))}
      </div>
    </section>
  )
}
