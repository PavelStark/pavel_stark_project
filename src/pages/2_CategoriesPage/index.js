import React, { useEffect } from "react";
import CategoriesContainer from "../../components/3_CategoriesContainer";
import style from "./CategoriesPage.module.css";
import BreadCrumbs from "../../components/9_Breadcrumps";

export default function CategoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <h2 className={style.CategoriesTitle}>Categories</h2>
      <CategoriesContainer type="allCategories" />
    </div>
  );
}
