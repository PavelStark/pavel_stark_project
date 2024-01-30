import React from 'react'
import style from './Header.module.css'
import logo from '../../ui/logo.png'
import basket from '../../ui/basketLogo.png'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <div className="wrapper">
      <header>
      <div>
       <img src={logo} alt='Logo'/>
      </div>
      <div className={style.navbar}>
            <Link to={'/'}> Main Page </Link>
            <Link to={'/categories/all'}> Categories </Link>
            <Link to={'/products/all'}> All products </Link>
            <Link to={'/sales/all'}> All sales </Link>
        </div>
        <div className={style.basketItem}>
            <Link to={'emptyBasket/'}>
            <img src={basket} alt='Basket' />
            </Link>
        </div>
        <div className={style.line}>
        </div>
      </header>
    </div>
  )
}

