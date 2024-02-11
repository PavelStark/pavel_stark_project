import React from "react";
import CategoryProductsContainer from "../../components/6_CategoryProductsContainer";
import style from "./CategoryProductsPage.module.css";
import { useSelector } from "react-redux";
import BreadCrumbs from "../../components/9_Breadcrumps";
import FilteredProducts from "../../components/10_FilterProducts";

export default function CategoryProductsPage() {
  const { category_title } = useSelector((store) => store.products);

  return (
    <div>
      <BreadCrumbs />
      <h2 className={style.category_title}>{category_title}</h2>
      <FilteredProducts />
      <CategoryProductsContainer />
    </div>
  );
}
