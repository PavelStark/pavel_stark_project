import React from "react";
import ProductsContainer from "../../components/4_ProductsContainer";
import style from "./ProductsPage.module.css";
import FilteredProducts from "../../components/10_FilterProducts";
import BreadCrumbs from "../../components/9_Breadcrumps";

export default function ProductsPage() {
  return (
    <div>
      <BreadCrumbs/>
      <h2 className={style.allProductsTitle}>All products</h2>
      <FilteredProducts />
      <ProductsContainer type="allProducts" />
    </div>
  );
}
