import React, {
  useReducer,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import gsap from 'gsap'
import {motion} from 'framer-motion'

import {pageTransition, pageVariants} from '@/pageTransition'
import {reducer} from './reducer'
import {Checkbox} from '../Checkbox/Checkbox'
import {FormVariants} from './FormVariants'
import {OrderFinalScreen} from '../OrderFinalScreen/OrderFinalScreen'

export const OrderForm = ({price, data, onSubmit, filesState}) => {
  const [state, dispatch] = useReducer(reducer, data)
  const [finalPrice, setFinalPrice] = useState(price)
  const [form, setForm] = useState(false)
  const $el = useRef(null)

  useEffect(() => {
    const top = $el.current ? $el.current.getBoundingClientRect().top : 0
    const scrolled = document.documentElement.scrollTop
    const to = scrolled + top * 0.7

    gsap.to(document.documentElement, {scrollTop: to, duration: 0.3})
  }, [])

  const onChange = useCallback(
    e =>
      dispatch({
        type: 'change',
        payload: {
          e,
          price,
          setFinalPrice,
          setForm,
        },
      }),
    [price]
  )

  return (
    <div ref={$el} className='order__form-wrapper'>
      {state.map(
        step =>
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
                  'order__form-inputs order__form-inputs--' +
                  step.inputsCount +
                  ' ' +
                  step.class
                }
              >
                {step.items.map(
                  item =>
                    item.exists && (
                      <Checkbox
                        onChange={onChange}
                        key={item.key}
                        uKey={item.key}
                        name={item.name}
                        type={item.type}
                        typeText={item.typeText}
                        img={item.img}
                        selected={item.selected}
                        price={item.price}
                        screenID={step.id}
                        parent={step.key}
                      />
                    )
                )}
              </div>
              <FormVariants state={step} filesState={filesState} />
            </motion.div>
          )
      )}
      {form && <OrderFinalScreen onSubmit={onSubmit} finalPrice={finalPrice} />}
    </div>
  )
}
