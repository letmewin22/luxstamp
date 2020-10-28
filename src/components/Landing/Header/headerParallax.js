import {useEffect, useCallback} from 'react'

export const useHeaderParallax = (header) => {
  
  const parallax = useCallback((e) => {
  	header.current.querySelectorAll('[data-parallax]').forEach(layer => {
  		let speed = layer.dataset.parallax
  		layer.style.transform = `translate3d(${e.clientX*speed/2200}px,${e.clientY*speed/2200}px,0)`
  	});
  }, [header])


  useEffect(() => {
    document.addEventListener('mousemove', parallax)
    return () => {
      document.removeEventListener('mousemove', parallax)
    }
  }, [header, parallax])
}
