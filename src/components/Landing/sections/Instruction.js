import React from 'react'

export const Instruction = () => {
  return (
    <section className='section instruction'>
      <div className='container section__container instruction__container'>
        <div className='instruction__left'>
          <div className='section__line mob-hidden' />
          <h2 className='h2 instruction__h2'>Як зробити замовлення?</h2>
        </div>
        <div className='instruction__right'>
          <ul className='instruction__items'>
            <li className='instruction__li'>
              <div className='section__line' />
              <h3 className='h3 instruction__h3'>Для ФОП</h3>
              <p className='instruction__text'>
                Для виготовлення потрібна фотографія/скан-копія витягу з ЕДР або
                вашого ідентифікаційного коду.
              </p>
            </li>
            <li className='instruction__li'>
              <div className='section__line' />
              <h3 className='h3 instruction__h3'>Для ТОВ</h3>
              <p className='instruction__text'>
                Для держустанов та ТОВ для виготовлення потрібна фотографія або
                скан-копія витягу з ЕДРПОУ.
              </p>
            </li>
            <li className='instruction__li'>
              <div className='section__line' />
              <h3 className='h3 instruction__h3'>Для адвоката/лікаря</h3>
              <p className='instruction__text'>
                Для виготовлення потрібна фотографія або скан-копія свідоцтва
                адвоката/диплома лікаря.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='container section__container instruction__container'>
        <div className='instruction__left'>
          <div className='section__line' />
          <h4 className='h4 instruction__h4'>Онлайн-замовлення</h4>
          <p className='instruction__text'>4 кроки до готового виробу:</p>
          <ul className='instruction__steps-list'>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>01</span>
              Обираєте потрібний вид та дизайн печатки.
            </li>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>02</span>
              Заповнюєте форму замовлення.
            </li>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>03</span>
              Додаєте до форми фото або скан-копію потрібного документа.
            </li>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>04</span>
              Отримуєте виріб кур’єром, Новою Поштою або забираєте у нас в
              офісі.
            </li>
          </ul>
        </div>
        <div className='instruction__right'>
          <div className='section__line' />
          <h4 className='h4 instruction__h4'>Замовлення в офісі</h4>
          <p className='instruction__text'>4 кроки до готового виробу:</p>
          <ul className='instruction__steps-list'>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>01</span>
              Приходите до нашого офісу.
            </li>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>02</span>
              Обираєте потрібний вид та дизайн печатки.
            </li>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>03</span>
              Додаєте потрібний документ або його фото/скан-копію, а також
              документ що підтверджує особу.
            </li>
            <li className='instruction__steps-li'>
              <span className='number instruction__steps-number'>04</span>
              Ви не встигнете допити каву, як ваш виріб буде готовий&nbsp;:)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
