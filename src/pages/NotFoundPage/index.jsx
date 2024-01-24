import React from 'react'
import notFoundPageImage from '../../ui/notFoundPageImage.jpg'
import style from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={style.notFoundPageContainer}>
      <img className={style.notFoundPageImage} src={notFoundPageImage} alt="NotFoundPageImage"></img>
      <Link to="/">
        <button className={style.goHome_btn}>Go Home</button>
      </Link>
    </div>
    
  )
}
