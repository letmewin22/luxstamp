import {useEffect} from 'react'
import gsap from 'gsap'

export const useHeaderLoading = (header) => {

  useEffect(() => {
    const bounds = document.body.getBoundingClientRect()
    const offset = window.innerWidth - bounds.width

    document.body.style.setProperty('--offset', offset + 'px')
    document.body.classList.add('e-fixed')

    const h1 = header.current.querySelector('h1')
    const p = header.current.querySelector('p')
    const img = header.current.querySelector('.header__img-wrapper')
    const btn = header.current.querySelector('.btn')
    const tl = gsap.timeline({
      onComplete: () => document.body.classList.remove('e-fixed')
    })
    tl.to(h1, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.4)
    tl.to(p, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.6)
    tl.to(btn, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.7)
    tl.to(img, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.8)
  }, [header])
}
