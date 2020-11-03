import React, {useState, useRef} from 'react'
import {Checkbox} from '../Checkbox/Checkbox'
import img from '@/img/order/form/1.png'
import img2 from '@/img/order/form/2.png'
import {clamp} from '@/utils/clamp'

/**
* @todo
1. Нужно сделать двухстороннюю привязку экранов и чекбоксов и выводить экраны только если они есть у чекбоксов в детях
2. Сделать русскую версию формы.
* */

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
      id: 0,
      parents: [],
      title: 'Оберіть вид виробу',
      inputsCount: 4,
      unique: true,
      visible: true,
      items: [
        {
          id: 1,
          name: 'Нова',
          children: ['Оберіть термін виготовлення'],
          type: 'with-img',
          img: img,
          selected: false,
        },
        {
          id: 2,
          name: 'По відбитку',
          type: 'with-img',
          img: img2,
          selected: false,
        }
      ],
    },
    {
      id: 1,
      parents: ['Нова', 'По відбитку'],
      title: 'Оберіть термін виготовлення',
      inputsCount: 4,
      unique: true,
      visible: false,
      items: [
        {
          id: 1,
          name: '1 година',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 2,
          name: '1 день',
          type: '',
          img: '',
          selected: false,
        },
      ],
    },
    {
      id: 2,
      parents: ['1 година', '1 день'],
      title: 'Оберіть організаційно-правову форму діяльності',
      inputsCount: 4,
      unique: true,
      visible: false,
      content: 'download-screen',
      items: [
        {
          id: 1,
          name: 'ФОП',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 2,
          name: 'ТОВ',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 3,
          name: 'Нотаріус/адвокат',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 4,
          name: 'Лікар',
          type: '',
          img: '',
          selected: false,
        },
      ],
    },
    {
      id: 3,
      parents: ['1 година', '1 день', 'Нова'],
      title: 'Оберіть дизайн печатки',
      inputsCount: 4,
      unique: true,
      visible: false,
      content: 'download-screen',
      items: [
        {
          id: 1,
          name: 'ФОП',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 2,
          name: 'ТОВ',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 3,
          name: 'Нотаріус/адвокат',
          type: '',
          img: '',
          selected: false,
        },
        {
          id: 4,
          name: 'Лікар',
          type: '',
          img: '',
          selected: false,
        },
      ],
    },
  ])


  const l = steps.length

  const onChange = (e) => {

    const newArray = [...steps]
    const screenId = +e.target.dataset.screenId
    const targetName = e.target.dataset.name

    const setSelect = () => {
      newArray[screenId].items.forEach((item) => {
        newArray[screenId].unique && (item.selected = false)
        if (item.name === targetName) {
          item.selected = item.selected ? false : true
        }
      })
    }

    const setVisible = () => {
      newArray.forEach((step) => {
        if (step.parents.includes(targetName)) {
          step.visible = true
        }
      })
    }

    if (counter.current > screenId) {

      const toHideEls = newArray.filter(el => el.id > screenId)

      toHideEls.forEach(el => {
        el.visible = false
        el.items.forEach(item => item.selected = false)
      })
      setSelect()
      counter.current = screenId
      setVisible()

    } else {

      setVisible()
      setSelect()

      counter.current++
      counter.current = clamp(counter.current, 0, l - 1)
    }

    setSteps([...newArray])
  }

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
                      img={item.img}
                      selected={item.selected}
                      screenID={step.id}
                    />
                  )
                })}
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: step.content }} /> */}
              {step.content && step.content === 'download-screen' && (
                <p>*Завантажте фото або скан-копію витягу з ЕДРПОУ/свідоцтво адвоката/диплом лікаря</p>
              )}
                {/* {step.content} */}
            </div>
          )
        )
      })}
    </div>
  )
}

