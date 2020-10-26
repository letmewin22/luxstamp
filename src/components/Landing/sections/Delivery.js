import React from 'react'

export const Delivery = () => {
  const delivery = [
    {
      h: 'Як сплатити замовлення?',
      items: [
        {
          text:
            'Ви можете сплатити замовлення онлайн у будь-якому банкінгу використовуючи реквізити, які надасть менеджер, або розрахуватися на місці — у нашому офісі.',
        },
      ],
    },
    {
      h: 'Як отримати замовлення?',
      items: [
        {
          h: 'Самовивіз із офісу',
          text:
            'Приїзджайте за своїим виробом до нашого офісу: ми пригостимо вас смачною кавою або чаєм! Забираючи печатку особисто, ви оберігаєте себе від того, щоб виріб попав у руки зловмисників.',
        },
        {
          h: 'Доставка кур’єром по місту',
          text:
            'В день замовлення (до 14.00) або на наступний день наш кур’єр доставить печатку чи штамп до вашого офісу. Вартість послуги — 50 гривень.',
        },
        {
          h: 'Доставка Новою Поштою по Україні',
          text:
            'Знаходитесь у другому місті? Немає проблем: ми виготовимо печатку або штамп, та надішлемо у ваш населений пункт поштовим оператором «Нова Пошта». Вартість послуги — згідно тарифів НП. ',
        },
      ],
    },
  ]

  return (
    <section className='section delivery'>
      <div className='container section__container'>
        <div className='section__line mob-hidden' />
        <h2 className='h2 delivery__h2'>Оплата та доставка</h2>
        <ul className='delivery__items'>
          {delivery.map((item) => {
            return (
              <li key={item.h} className='delivery__li'>
                <div className='delivery__li-left'>
                  <div className='section__line' />
                  <h5 className='h5 delivery__h5'>{item.h}</h5>
                </div>

                <div className='delivery__li-right'>
                  {item.items.map((el) => {
                    return (
                      <div key={el.text} className='delivery__li-item'>
                        <div className='section__line' />
                        {el.h && <h3 className='h3 delivery__h3'>{el.h}</h3>} 
                        <p className='delivery__text'>{el.text}</p>
                      </div>
                    )
                  })}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
