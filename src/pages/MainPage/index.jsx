import React from "react";
import style from "./MainPage.module.css";
import checkOut from "../../ui/checkOut.jpg";

export default function MainPage() {
  return (
    <div>
      <div className={style.banner}><img src={checkOut} alt="checkOut" />
      </div>

      <div className='wrapper'>
        <div>
          <p className={style.bannerText}>Amazing Discounts on Garden Products!</p>
          
          <button className={style.checkout_btn}> Check out</button>
        </div>
        <div className={style.categoriesContainer}>
          <p className={style.categories}>Categories</p>
          <div className={style.categories_line}></div>
          <p className={style.all_categories}>All categories</p>
        </div>
        <div className={style.categoriesImageContainer}></div>
      </div>
    </div>
  );
}
