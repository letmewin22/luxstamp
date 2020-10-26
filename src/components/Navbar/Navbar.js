import React from 'react'
import './Navbar.scss'
import {Logo} from '../Logo'

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container navbar__container">
        <div className="navbar__left">
          <a href="/" aria-label="logo" className="navbar__logo"><Logo/></a>
          <div onClick={props.langSwitcher} className="navbar__lang-switcher">Ua</div>       
        </div>
        <div className="navbar__right">
          <ul className="navbar__items">
            <li className="navbar__li">
              <a href="/" className="navbar__link">Замовити онлайн</a>
              </li>
            <li className="navbar__li">
              <a href="/" className="navbar__link">Переваги</a>
              </li>
            <li className="navbar__li">
              <a href="/" className="navbar__link">Наші клієнти</a>
              </li>
            <li className="navbar__li">
              <a href="/" className="navbar__link">Оплата та доставка</a>
              </li>
            <li className="navbar__li">
              <a href="/" className="navbar__link">Контакти</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
