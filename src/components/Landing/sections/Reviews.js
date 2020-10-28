import React, {useState, useRef} from 'react'
import gsap from 'gsap'
import arrow0 from '../../../img/arrow0.svg'
import {SliderArrow} from '../../SliderArrow'

export const Reviews = () => {

  const reviews = [
    {
      review: `Все дуже сподобалось адже тут вам запропонують не лише смачну каву але розроблять стильний дизант печатки а швиткість виготовлення взагалі вражає поки я допила каву все вже було готово. Рекомендую!`,
      name: 'Христина Рошка',
    },
    {
      review: 'Обслуживание и качество на высшем уровне! Рекомендую всем!',
      name: 'Любов Калинюк',
    },
    {
      review: `Реально очень ответственные и дружелюбные люди с такими людьми хотят заниматься бизнесом, довольна и рекомендую людям все наверху и в работе проделанной чуть больше часа уже было готово и выбор в печатях есть разные дорогой уже вкус от шаблона с разной степенью защиты и до самого выбора тюленя, которую я выбрала по рекомендации и интересовалась, как новый принт японского производства понравился больше мужской такой железный маленький и удобный в транспортировке, когда нужно с себя и ещё очень крутая сумочка к этому, продолжу писать только с ним и буду советовать людей, благодарить и удачи в работе`,
      name: 'Владимир Визнович',
    },
  ]

  const max = reviews.length - 1

  const [current, setCurrent] = useState(0)
  const slide = useRef(null)

  const slideAnimation = (cb) => {
    gsap.to(slide.current, { 
      duration: 0.25, 
      opacity: 0,
      onComplete: () => {
        cb()
        gsap.fromTo(slide.current, {opacity: 0}, {duration: 0.25, opacity: 1})
      }
    })
  }

  const prevSlide = () => {
    slideAnimation(() => {
      current <= 0 ? setCurrent(max) : setCurrent(current - 1)
    })
  }

  const nextSlide = () => {
    slideAnimation(() => {
      current >= max ? setCurrent(0) : setCurrent(current + 1)
    })
  }

  return (
    <section className='section reviews dg'>
      <div className='container section__container dg__container'>
        <div className='section__line mob-hidden' />
        <div className='dg__top'>
          <div className='dg__left'>
            <p className='dg__top-text'>
              Подивіться, що про нас кажуть постійні клієнти:
            </p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>Відгуки клієнтів</h2>
              <img src={arrow0} alt='arrow' />
            </div>
          </div>
        </div>
        <div className='dg__bottom'>
          <div className='dg__bottom-item'>
            <div className='dg__left'>
              <div className='dg__left-content'>
                <div className='section__line mob-hidden' />
                <nav className='reviews__slider-nav'>
                  <button
                    onClick={prevSlide}
                    className='reviews__slider-nav-item reviews__slider-nav-item--left'
                  >
                    <SliderArrow />
                  </button>
                  <button
                    onClick={nextSlide}
                    className='reviews__slider-nav-item reviews__slider-nav-item--right'
                  >
                    <SliderArrow />
                  </button>
                </nav>
                <a
                  href='https://www.facebook.com/luxstampIF/reviews/?ref=page_internal'
                  className='btn reviews__facebook-btn'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  дивитись у facebook
                </a>
              </div>
            </div>
            <div className='dg__right'>
              <div className='section__line mob-hidden' />

              <div ref={slide} className='reviews__review-wrapper'>
                <p className='big-p reviews__review'>
                  {reviews[current].review}
                </p>
                <span className='reviews__by'>© {reviews[current].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
