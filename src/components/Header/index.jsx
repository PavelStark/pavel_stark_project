import React from 'react'
import style from './Header.module.css'
import logo from '../../ui/logo.png'
import basket from '../../ui/basket.png'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <div className="wrapper">
      <header>
      <div>
       <img src={logo} alt='Logo'/>
      </div>
      <div className={style.navbar}>
            <Link to={'/MainPage'}> Main Page </Link>
            <Link to={'/Categories'}> Categories </Link>
            <Link to={'/ProductsPage'}> All products </Link>
            <Link to={'/AllSales'}> All sales </Link>
        </div>
      <div className={style.basketItem}>
            <img src={basket} alt='Basket'/>
        </div>
        <div className={style.line}>
        </div>
      </header>
    </div>
  )
}

