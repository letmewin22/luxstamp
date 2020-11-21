import React, {useState, useRef, useContext} from 'react'
import gsap from 'gsap'
import {SliderArrow} from '../../SliderArrow'
import TextContext from '@/context/TextContext'

export const Reviews = props => {
  const reviews = props.resource.reviews.read()

  const {clientsReviews} = useContext(TextContext)

  const max = reviews.length - 1

  const [current, setCurrent] = useState(0)
  const slide = useRef(null)

  const slideAnimation = cb => {
    gsap.to(slide.current, {
      duration: 0.25,
      opacity: 0,
      onComplete: () => {
        cb()
        gsap.fromTo(slide.current, {opacity: 0}, {duration: 0.25, opacity: 1})
      },
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
            <p className='dg__top-text'>{clientsReviews.descriptor}</p>
          </div>
          <div className='dg__right'>
            <div className='dg__right-content'>
              <h2 className='h2 dg__h2'>{clientsReviews.title}</h2>
              <img src='/img/arrow0.svg' alt='arrow' />
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
                    aria-label='Кнопка слайдера влево'
                    onClick={prevSlide}
                    className='reviews__slider-nav-item reviews__slider-nav-item--left'
                  >
                    <SliderArrow />
                  </button>
                  <button
                    aria-label='Кнопка слайдера вправо'
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
                  {clientsReviews.button.toLowerCase()}
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
