import React, {useReducer} from 'react'
import {Checkbox} from '../Checkbox/Checkbox'

import {DownloadIcon} from '../DownloadIcon'
import {motion} from 'framer-motion'
import {pageTransition, pageVariants} from '@/pageTransition'
import {reducer} from './reducer'

export const OrderForm = ({data}) => {

  const [state, dispatch] = useReducer(reducer, data)

  const onChange = (e) => dispatch({type: 'change', payload: e})

  return (
    <div className='order__form-wrapper'>
      {state.map(step =>
          step.visible &&
          step.exists && (
            <motion.div
              key={step.key}
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
                {step.items.map((item) =>
                    item.exists && (
                    <Checkbox
                      onChange={onChange}
                      key={item.key}
                      uKey={item.key}
                      name={item.name}
                      type={item.type}
                      img={item.img}
                      selected={item.selected}
                      price={item.price}
                      screenID={step.id}
                      parent={step.key}
                    />
                  )
                )}
              </div>
              {step.content && step.content === 'download-screen' && (
                <div className='order__form-download'>
                  <p className='order__form-download-text'>
                    <span>*</span> {step.contentText}
                  </p>
                  <label className='order__download-button'>
                    <span>
                      <DownloadIcon />
                    </span>
                    {step.contentBtn}
                    <input type='file' />
                  </label>
                </div>
              )}
            </motion.div>
          )
      )}
    </div>
  )
}
