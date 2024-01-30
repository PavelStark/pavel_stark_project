import React from "react";
import style from "./MainPage.module.css";
import CategoriesContainer from "../../components/CategoriesContainer";
import Coupon from "../../components/Coupon";
import { useRef } from 'react';
import AllSalesContainer from "../../components/AllSalesContainer";
import LinkButtonContainer from "../../components/LinkButtonContainer";
import LinkButton from "../../ui/Buttons/LinkButton";


export default function MainPage() {

  //-----------------------------------using ref for scroll

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  //-----------------------------------

  return (
    <div>
      <div className={style.banner}>
        <div className="wrapper">
          <p className={style.bannerText}>
            Amazing Discounts on Garden Products!
          </p>

            <button onClick={handleClick} className={style.checkout_btn}>Check out</button>
     
        </div>
      </div>

      <div className={style.asd}>
       <LinkButtonContainer title='Categories'/>
        <LinkButton buttonText='All Categories' asd='/categories/all'/>
      </div>
  

      <div className={style.CategoriesAllContainer}>
        <CategoriesContainer type="notAllCategories" />
      </div>
      <Coupon />

      <div className={style.asd}>
        <LinkButtonContainer title='Sale'/>
        <LinkButton buttonText='All Sales' asd='/sales/all' />
      </div>
     

      <div ref={ref} >
        <AllSalesContainer type="notAllSales" />
      </div>
    
    </div>
  );
}
