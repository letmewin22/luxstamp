import React, {useState, useRef, useContext, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {NavLink} from '../NavLink'
import {Logo} from '../Logo'
import {useResize} from '../../hooks/Resizer'
import TextContext from '../../context/TextContext'
import './Navbar.scss'

export const Navbar = props => {
  const {navigation} = useContext(TextContext)
  const [lang, setLang] = useState('uk')

  const langText = lang === 'uk' ? 'Ru' : 'Ua'

  let location = useLocation()
  let [anchorType, setAnchorType] = useState('anchor')

  useEffect(() => {
    const type = location.pathname === '/' ? 'anchor' : 'anchor-from-dif-page'
    setAnchorType(type)
  }, [location, anchorType])

  useEffect(() => {
    setLang(JSON.parse(localStorage.getItem('lang') || '"uk"'))
  }, [])

  const links = [
    {
      href: '#order',
      text: navigation.order,
      type: anchorType,
    },
    {
      href: '#advantages',
      text: navigation.advantages,
      type: anchorType,
    },
    {
      href: '#clients',
      text: navigation.clients,
      type: anchorType,
    },
    {
      href: '#delivery',
      text: navigation.delivery,
      type: anchorType,
    },
    {
      href: '/contacts',
      text: navigation.contacts,
      type: 'link',
    },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useResize(() => {
    window.innerWidth < 1280 ? setIsMobile(true) : setIsMobile(false)
  })

  const nav = useRef(null)
  const [navClasses, setNavClasses] = useState(['mobile-nav'])

  const openNav = () => {
    document.body.classList.add('e-fixed')
    setNavClasses([...navClasses, 'is-active'])
  }

  const closeNav = () => {
    document.body.classList.remove('e-fixed')
    setNavClasses(navClasses.filter(el => el !== 'is-active'))
  }

  const getLinks = parent => {
    return links.map(link => {
      return (
        <li onClick={closeNav} key={link.text} className={parent + '__li'}>
          <NavLink link={link} className={parent + '__link'} />
        </li>
      )
    })
  }

  return (
    <>
      <div className='navbar'>
        <div className='container navbar__container'>
          <div className='navbar__left'>
            <Link to='/' aria-label='logo' className='navbar__logo'>
              <Logo />
            </Link>
            <button
              onClick={props.langSwitcher}
              className='navbar__lang-switcher'
            >
              {langText}
            </button>
          </div>
          <div className='navbar__right'>
            {!isMobile ? (
              <ul className='navbar__items'>{getLinks('navbar')}</ul>
            ) : (
              <button
                onClick={openNav}
                aria-label='burger'
                className='navbar__burger'
              >
                <span className='navbar__burger-line navbar__burger-line--1'></span>
                <span className='navbar__burger-line navbar__burger-line--2'></span>
                <span className='navbar__burger-line navbar__burger-line--3'></span>
              </button>
            )}
          </div>
        </div>
      </div>
      {isMobile && (
        <div ref={nav} className={navClasses.join(' ')}>
          <button onClick={closeNav} className='mobile-nav__close'>
            <svg
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M26 2.275L23.725 0L13 10.725L2.275 0L0 2.275L10.725 13L0 23.725L2.275 26L13 15.275L23.725 26L26 23.725L15.275 13L26 2.275Z' />
            </svg>
          </button>
          <ul className='mobile-nav__items'>{getLinks('mobile-nav')}</ul>
        </div>
      )}
    </>
  )
}
