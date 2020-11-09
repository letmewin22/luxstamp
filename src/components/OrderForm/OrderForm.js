import React, {useState, useRef} from 'react'
import {Checkbox} from '../Checkbox/Checkbox'

import {clamp} from '@/utils/clamp'
import {DownloadIcon} from '../DownloadIcon'

/**
* @todo
1. Сделать русскую версию формы.
* */

export const OrderForm = ({data}) => {
  const counter = useRef(0)
  const exclude = useRef([])

  const [steps, setSteps] = useState(data)

  const l = steps.length

  const onChange = (e) => {
    const newArray = [...steps]
    const screenId = +e.target.dataset.screenId
    const targetName = e.target.dataset.name
    const allExcludes = []

    newArray[screenId].items.forEach((item) => {
      if (item.name === targetName) {
        !newArray[screenId].excludes.includes(...item.exclude) &&
          (newArray[screenId].excludes = item.exclude)
      }
    })

    newArray.forEach((screen) => allExcludes.push(...screen.excludes))
    exclude.current = allExcludes

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
        step.exists = true
        if (exclude.current.includes(step.title)) {
          step.exists = false
        }
      })
    }

    if (counter.current >= screenId) {
      const toHideEls = newArray.filter((el) => el.id > screenId)

      toHideEls.forEach((el) => {
        el.visible = false
        el.items.forEach((item) => (item.selected = false))
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
          step.visible &&
          step.exists && (
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
                      price={item.price}
                      screenID={step.id}
                    />
                  )
                })}
              </div>
              {step.content && step.content === 'download-screen' && (
                <div className='order__form-download'>
                  <p className='order__form-download-text'>
                    <span>*</span>Завантажте фото або скан-копію витягу з
                    ЕДРПОУ/свідоцтво адвоката/диплом лікаря
                  </p>
                  <label className='order__download-button'>
                    <span><DownloadIcon /></span>
                    Завантажити документ
                    <input type='file' />
                  </label>
                </div>
              )}
            </div>
          )
        )
      })}
    </div>
  )
}
