import React, { useEffect } from "react";
import AllSalesContainer from "../../components/5_AllSalesContainer";
import style from "./AllSalesPage.module.css";
import BreadCrumbs from "../../components/9_Breadcrumps";
import FilterProducts from "../../components/10_FilterProducts";

export default function AllSalesPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []) 
  
  return (
    <div>
      <BreadCrumbs/>
      <h2 className={style.allSalesTitle}>Discounted Items</h2>
      <FilterProducts type="allSales" />
      <AllSalesContainer type="allSales" />
    </div>
  );
}
