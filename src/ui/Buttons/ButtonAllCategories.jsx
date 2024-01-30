import React from 'react'
import style from './ButtonAllCategories.module.css';

export default function ButtonAllCategories() {
  return (
    <div>
      <div className={style.btnContainer}>

      <div className={style.btnLine}></div>
        <button className={style.btn}>All Categories</button>
        
      </div>
    </div>
  )
}