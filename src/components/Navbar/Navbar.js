import React, {useState, useRef, useContext} from 'react'
import {Link} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.scss'
import {Logo} from '../Logo'
import {useResize} from '../../hooks/Resizer'
import TextContext from '../../context/TextContext'

export const Navbar = (props) => {

  const {navigation} = useContext(TextContext)

  const links = [
    {
      href: '#order',
      text: navigation.order,
      type: 'anchor',
    },
    {
      href: '#advantages',
      text: navigation.advantages,
      type: 'anchor',
    },
    {
      href: '#clients',
      text: navigation.clients,
      type: 'anchor',
    },
    {
      href: '#delivery',
      text: navigation.delivery,
      type: 'anchor',
    },
    {
      href: '/',
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
    setNavClasses(navClasses.filter((el) => el !== 'is-active'))
  }

  const getLinks = (parent) => {
    return links.map((link) => {
      return (
        <li onClick={closeNav} key={link.text} className={parent + '__li'}>
          {link.type === 'anchor' ? (
            <AnchorLink href={link.href} className={parent + '__link'}>
              {link.text}
            </AnchorLink>
          ) : (
            <Link to='/contacts' className={parent + '__link'}>
              {link.text}
            </Link>
          )}
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
              Ru
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
              <path
                d='M26 2.275L23.725 0L13 10.725L2.275 0L0 2.275L10.725 13L0 23.725L2.275 26L13 15.275L23.725 26L26 23.725L15.275 13L26 2.275Z'
              />
            </svg>
          </button>
          <ul className='mobile-nav__items'>{getLinks('mobile-nav')}</ul>
        </div>
      )}
    </>
  )
}
