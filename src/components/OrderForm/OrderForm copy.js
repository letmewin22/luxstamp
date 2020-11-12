import React, {useRef, useReducer} from 'react'
import {Checkbox} from '../Checkbox/Checkbox'

import {DownloadIcon} from '../DownloadIcon'
import {motion} from 'framer-motion'
import {pageTransition, pageVariants} from '@/pageTransition'
import { reducer } from './reducer'

/**
* @todo
1. Сделать русскую версию формы.
* */

export const OrderForm = ({data}) => {
  const counter = useRef(0)
  const exclude = useRef([])

  const [state, dispatch] = useReducer(reducer, data)

  const onChange = (e) => dispatch({type: 'change', payload: {e, counter, exclude}})
  

  return (
    <div className='order__form-wrapper'>
      {state.map((step) => {
        return (
          step.visible &&
          step.exists && (
              <motion.div
                key={step.id}
                className='order__form-step'
                initial='out'
                animate='in'
                exit='out'
                variants={pageVariants}
                transition={pageTransition}
              >
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
                      <span>
                        <DownloadIcon />
                      </span>
                      Завантажити документ
                      <input type='file' />
                    </label>
                  </div>
                )}
              </motion.div>
          )
        )
      })}
    </div>
  )
}
