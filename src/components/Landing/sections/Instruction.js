import React from 'react'

export const Instruction = () => {

  const howItems = [
    {
      h: 'Для ФОП',
      text: `Для виготовлення потрібна фотографія/скан-копія витягу з ЕДР або
      вашого ідентифікаційного коду.`,
    },
    {
      h: 'Для ТОВ',
      text: `Для держустанов та ТОВ для виготовлення потрібна фотографія або
      скан-копія витягу з ЕДРПОУ.`,
    },
    {
      h: 'Для адвоката/лікаря',
      text: `Для виготовлення потрібна фотографія або скан-копія свідоцтва
      адвоката/диплома лікаря.`,
    }
  ]

  const onlineItems = [
    {
      text: 'Обираєте потрібний вид та дизайн печатки.',
    },
    {
      text: 'Заповнюєте форму замовлення.',
    },
    {
      text: 'Додаєте до форми фото або скан-копію потрібного документа.',
    },
    {
      text: `Отримуєте виріб кур’єром, Новою Поштою або забираєте у нас в
      офісі.`,
    }
  ]

  const officeItems = [
    {
      text: 'Приходите до нашого офісу.',
    },
    {
      text: 'Обираєте потрібний вид та дизайн печатки.',
    },
    {
      text: `Додаєте потрібний документ або його фото/скан-копію, а також
              документ що підтверджує особу.`,
    },
    {
      text: 'Ви не встигнете допити каву, як ваш виріб буде готовий :)',
    }
  ]

  return (
    <section className='section instruction'>
      <div className='container section__container instruction__container'>
        <div className='instruction__left'>
          <div className='section__line mob-hidden' />
          <h2 className='h2 instruction__h2'>Як зробити замовлення?</h2>
        </div>
        <div className='instruction__right'>
          <ul className='instruction__items'>
            {howItems.map(item => {
              return (
                <li key={item.h} className='instruction__li'>
                  <div className='section__line' />
                  <h3 className='h3 instruction__h3'>{item.h}</h3>
                  <p className='instruction__text'>{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='container section__container instruction__container'>
        <div className='instruction__left'>
          <div className='section__line' />
          <h4 className='h4 instruction__h4'>Онлайн-замовлення</h4>
          <p className='instruction__text'>4 кроки до готового виробу:</p>
          <ul className='instruction__steps-list'>
            {onlineItems.map((item, i) => {
              return (
                <li key={item.text} className='instruction__steps-li'>
                  <span className='number instruction__steps-number'>
                    0{i + 1}
                  </span>
                  {item.text}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='instruction__right'>
          <div className='section__line' />
          <h4 className='h4 instruction__h4'>Замовлення в офісі</h4>
          <p className='instruction__text'>4 кроки до готового виробу:</p>
          <ul className='instruction__steps-list'>
            {officeItems.map((item, i) => {
              return (
                <li key={item.text} className='instruction__steps-li'>
                  <span className='number instruction__steps-number'>
                    0{i + 1}
                  </span>
                  {item.text}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
