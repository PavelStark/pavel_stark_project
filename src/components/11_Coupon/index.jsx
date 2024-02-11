import React from "react";
import style from "./Coupon.module.css";
import InputDiscountForm from "../../ui/DiscountForm/inputDiscountForm";
import discount from "../../media/Discount.png";

export default function Coupon() {
  return (
    <div className="wrapper">
      <div className={style.discount}>
        <p className={style.discountTxt}>5% off on the first order</p>
        <div className={style.discountItems}>
          <div className={style.hands}>
            <img src={discount} alt="discount" />
          </div>
          <InputDiscountForm />
        </div>
      </div>
    </div>
  );
}
