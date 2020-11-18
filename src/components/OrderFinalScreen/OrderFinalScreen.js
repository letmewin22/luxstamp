import React from 'react'
import {Button} from '../Button/Button'
import {Form, Input} from '../Form'

export const OrderFinalScreen = ({finalPrice, onSubmit}) => {
  return (
    <div className='order__final-screen'>
      <div className='order__final-price'>
        <p>
          Сума до сплати: <span>{finalPrice} грн</span>
        </p>
      </div>
      <div className='order__form-wrapper'>
        <h2 className='h2'>Заповніть форму для замовлення</h2>
        <Form classes='order-form' onSubmit={onSubmit}>
          <Input
            tagName='input'
            type='text'
            id='order-name'
            placeholder='Ваше ім’я'
            classes='order-form__input'
          />
          <Input
            tagName='input'
            type='tel'
            id='order-phone'
            placeholder='Номер телефону'
            classes='order-form__input'
            required={{type: 'minlen', minValue: 10}}
            requiredText={'Некорректний номер'}
          />
          <Input
            tagName='input'
            type='select'
            id='order-city'
            options={[
              'Киів',
              'Івано-Франківськ',
              'Новоград-Волинський',
              'Бахмач',
              'Інше',
            ]}
            placeholder='Місто'
            text='Оберіть ваше місто'
            classes='order-form__input'
          />
          <Input
            tagName='input'
            type='select'
            id='order-delivery'
            options={['Нова пошта', 'УкрПошта', 'МістЕкспресс', 'Самовивіз']}
            placeholder='Вид доставки'
            text='Оберіть вид доставки'
            classes='order-form__input'
          />
          <Input
            tagName='input'
            type='select'
            id='order-messanger'
            options={['Telegram', 'Viber', 'Facebook', 'E-mail']}
            placeholder='Мессенджер'
            text="Як з вами зручніше тримати зв'язок?"
            classes='order-form__input'
          />
          <Input
            tagName='input'
            type='textarea'
            id='order-textarea'
            placeholder='Хочу печатку за 1 годину!'
            text='Коментар до замовлення'
            classes='order-form__input order-form__input--full'
          />
          <div className='form__bottom'>
            <p>
              <span>*</span> якщо не знайшли потрібний дизайн або оснащення
              зв'яжіться з нами і ми вирішимо це питання.
            </p>
            <Button
              text={'Замовити печатку'}
              classes='form__btn'
              type='submit'
            />
          </div>
        </Form>
      </div>
    </div>
  )
}
