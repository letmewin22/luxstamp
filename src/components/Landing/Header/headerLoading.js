import {useEffect} from 'react'
import gsap from 'gsap'

export const useHeaderLoading = header => {
  useEffect(() => {
    document.body.style.pointerEvents = 'none'

    const h1 = header.current.querySelector('h1')
    const p = header.current.querySelector('p')
    const img = header.current.querySelector('.header__img-wrapper')
    const btn = header.current.querySelector('.btn')
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.pointerEvents = 'auto'
      },
    })
    tl.to(h1, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.4)
    tl.to(p, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.6)
    tl.to(btn, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.7)
    tl.to(img, {duration: 0.5, opacity: 1, y: 0, ease: 'power2.out'}, 0.8)
  }, [header])
}
