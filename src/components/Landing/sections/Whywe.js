import React from 'react'

export const WhyWe = () => {
  
  const items = [
    {
      h: 'Швидке виготовлення',
      text:
        'Нам потрібно від 15 до 60 хвилин, щоб виготовити печатку, штамп або факсиміле.',
    },
    {
      h: 'Лазерна технологія',
      text:
        'Ми використовуємо сучасну лазерну технологію для виготовлення кліше.',
    },
    {
      h: 'Надійність виробу',
      text:
        'Використовуємо фурнітуру від австрійського виробника та надаємо довічну гарантію на кліше.',
    },
    {
      h: 'Захищеність кліше',
      text:
        'Кожне кліше має 3-х ступеневий захист від підроблення — не хвилюйтесь за безпеку своїх документів.',
    },
    {
      h: 'Зручний сервіс',
      text:
        'Кава, чай, печиво та цукерки — у нас є все! Зробіть приємну паузу у нашому офісі, доки ми виготовляємо печатку.',
    },
  ]

  return (
    <section className='section why-we'>
      <div className='container section__container'>
        <div className='section__line mob-hidden' />
        <h2 className='h2 why-we__h2'>Чому ми?</h2>
        <ul className='why-we__items'>
          {items.map(item => {
            return (
              <li key={item.h} className='why-we__li'>
                <div className='why-we__li-left'>
                  <div className='section__line' />
                  <h5 className='h5 why-we__h5'>{item.h}</h5>
                </div>

                <div className='why-we__li-right'>
                  <div className='section__line mob-hidden' />
                  <p className='why-we__text'>{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
