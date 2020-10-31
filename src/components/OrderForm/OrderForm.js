import React from 'react'
import {Checkbox} from '../Checkbox/Checkbox'
import img from '../../img/order/form/1.png'
import img2 from '../../img/order/form/2.png'

export const OrderForm = () => {
  return (
    <div className='order__form-wrapper'>
      <div className='order__form-step'>
        <h3 className='h3 order__h3'>Оберіть вид виробу</h3>
        <div className='order__form-inputs order__form-inputs--4'>
          <Checkbox text='Нова' type='with-img' img={img} />
          <Checkbox text='По відбитку' type='with-img' img={img2} />
        </div>
      </div>
      <div className='order__form-step'>
        <h3 className='h3 order__h3'>Оберіть термін виготовлення</h3>
        <div className='order__form-inputs order__form-inputs--4'>
          <Checkbox text='1 година' />
          <Checkbox text='1 день' />
        </div>
      </div>
      <div className='order__form-step'>
        <h3 className='h3 order__h3'>Оберіть організаційно-правову форму діяльності</h3>
        <div className='order__form-inputs order__form-inputs--4'>
          <Checkbox text='ФОП' />
          <Checkbox text='ТОВ' />
          <Checkbox text='Держустанова' />
          <Checkbox text='Нотаріус/адвокат' />
          <Checkbox text='Лікар' />
        </div>
      </div>
    </div>
  )
}
