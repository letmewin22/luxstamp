import React, {useState, useRef} from 'react'
import {Checkbox} from '../Checkbox/Checkbox'
import img from '../../img/order/form/1.png'
import img2 from '../../img/order/form/2.png'

export const OrderForm = () => {
  const counter = useRef(0)

  // const object = [
  //   {
  //     price: 420,
  //     name: 'Печатки',
  //     items: []
  //   },
  //   {
  //     price: 350,
  //     name: 'Штампы',
  //     items: []
  //   },
  //   {
  //     price: 280,
  //     name: 'Факсимиле',
  //     items: []
  //   }
  // ]

  const [steps, setSteps] = useState([
    {
      id: 1,
      parents: [],
      title: 'Оберіть вид виробу',
      inputsCount: 4,
      unique: true,
      visible: true,
      items: [
        {
          id: 1,
          name: 'Нова',
          type: 'with-img',
          selected: false,
          img: img,
        },
        {
          id: 2,
          name: 'По відбитку',
          type: 'with-img',
          selected: false,
          img: img2,
        },
      ],
    },
    {
      id: 2,
      parents: ['Нова', 'По відбитку'],
      title: 'Оберіть термін виготовлення',
      inputsCount: 4,
      unique: true,
      visible: false,
      items: [
        {
          id: 1,
          name: '1 година',
          type: null,
          img: '',
          selected: false,
        },
        {
          id: 2,
          name: '1 день',
          type: null,
          img: '',
          selected: false,
        },
      ],
    },
    {
      id: 3,
      visible: false,
      parents: ['1 година', '1 день'],
      title: 'Оберіть організаційно-правову форму діяльності',
      inputsCount: 4,
      unique: true,
      items: [
        {
          id: 1,
          name: 'ФОП',
          type: null,
          img: '',
          selected: false,
        },
        {
          id: 2,
          name: 'ТОВ',
          type: null,
          img: '',
          selected: false,
        },
        {
          id: 3,
          name: 'Нотаріус/адвокат',
          type: null,
          img: '',
          selected: false,
        },
        {
          id: 4,
          name: 'Лікар',
          type: null,
          img: '',
          selected: false,
        },
      ],
    },
  ])

  // const [markup, setMarkup] = useState([])

  const onChange = (e) => {
    const newArray = [...steps]
    const l = newArray.length

    // newArray.forEach(el => el.visible = false)

    newArray[counter.current].items.forEach((item) => {
      newArray[counter.current].unique && (item.selected = false)
      if (item.name === e.target.dataset.name) {
        item.selected = true
      }
    })

    newArray.forEach((step, i) => {
      console.log(counter.current, i);
      if (step.parents.includes(e.target.dataset.name)) {
        newArray[i].visible = true
      }
    })
    if(counter.current < l - 1) {
      counter.current++
    } 
    setSteps([...newArray])
  }
  
  // console.log(counter.current)
  console.log(steps)

  return (
    <div className='order__form-wrapper'>
      {steps.map((step) => {
        return (
          step.visible && (
            <div key={step.id} className='order__form-step'>
              <h3 className='h3 order__h3'>{step.title}</h3>
              <div
                className={
                  'order__form-inputs order__form-inputs--' + step.inputsCount
                }
              >
                {step.items.map((item) => {
                  return (
                    <Checkbox
                      onChange={onChange}
                      key={item.id}
                      name={item.name}
                      type={item.type}
                      img={item.img && item.img}
                      selected={item.selected}
                    />
                  )
                })}
              </div>
            </div>
          )
        )
      })}
    </div>
  )
}
