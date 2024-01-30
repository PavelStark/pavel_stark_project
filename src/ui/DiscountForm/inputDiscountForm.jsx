import React from 'react'
import style from './InputDiscountForm.module.css'; 

export default function InputDiscountForm() {
  return (
    <div>
        <div className={style.discount_form}>
            <input className={style.discountInput} type="text" id="name" name="name" placeholder="Name"/>
            <input className={style.discountInput} type="tel" id="phone" name="phone" placeholder="Phone number"/>
            <input className={style.discountInput} type="email" id="email" name="email" placeholder="Email"/>
            <button className={style.couponBtn} type="submit">Get a discount</button>
        </div>
    </div>
  )
}