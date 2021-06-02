import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import SmoothScroll from 'smooth-scroll'

export const NavLink = ({link, className}) => {
  useEffect(() => {
    const smthScroll = new SmoothScroll('a[href*="#"]')
    return () => {
      smthScroll.destroy()
    }
  }, [])

  return (
    <>
      {link.type === 'anchor' && (
        <a href={link.href} className={className}>
          {link.text}
        </a>
      )}
      {link.type === 'anchor-from-dif-page' && (
        <HashLink to={'/' + link.href} className={className}>
          {link.text}
        </HashLink>
      )}
      {link.type === 'link' && (
        <Link to={link.href} className={className}>
          {link.text}
        </Link>
      )}
    </>
  )
}
