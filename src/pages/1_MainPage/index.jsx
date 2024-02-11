import React, { useRef } from "react";
import style from "./MainPage.module.css";
import CategoriesContainer from "../../components/3_CategoriesContainer";
import Coupon from "../../components/11_Coupon";
import LinkButtonContainer from "../../components/12_LinkButtonContainer";
import LinkButton from "../../ui/Buttons/LinkButton/linkButton";
import MainButton from "../../ui/Buttons/MainButton/mainButton";
import ProductsContainer from "../../components/4_ProductsContainer";

export default function MainPage() {
  //-----------------------------------using ref for scroll

  const saleRef = useRef();

  const handleClick = () => {
    saleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={style.banner}>
        <div className="wrapper">
          <p className={style.bannerText}>
            Amazing Discounts on Garden Products!
          </p>

          <MainButton widthBtn="218" title="Check out" onClick={handleClick} />
        </div>
      </div>

      <div className={style.linkButtonAllContainer}>
        <LinkButtonContainer title="Categories" />
        <LinkButton buttonText="All Categories" link="/categories/all" />
      </div>

      <div className={style.CategoriesAllContainer}>
        <CategoriesContainer type="notAllCategories" />
      </div>

      <Coupon />

      <div ref={saleRef} className={style.linkButtonAllContainer}>
        <LinkButtonContainer title="Sale" />
        <LinkButton buttonText="All Sales" link="/sales/all" />
      </div>

      <div>
        <ProductsContainer type="topSales" />
      </div>
    </div>
  );
}
