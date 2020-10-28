import { useEffect, useCallback } from 'react'

export const useResize = (cb) => {
  const resizeHandler = useCallback(() => {
    cb()
  }, [cb])

  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])
}
