import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./8_Breadcrumps.module.css"

export default function BreadCrumbs() {
  const location = useLocation();
  
  let crumbTitle = "";
  let crumbTitle2 = "";
  let link = "";
  let link2 = "";
  

  if (location.pathname === "/categories/all") {
    crumbTitle = "Main Page";
    crumbTitle2 = "Categories";
    link = "/"
    link2 = "/categories/all"
  }
  
    
return (
  <div className={style.breadCrumbsContainer}>
    <div className={style.crumb}>
      <Link className={style.link} to={link}>{crumbTitle}</Link>
      <Link className={style.link} to={link2}>{crumbTitle2}</Link>
    </div>
  </div>
);
}


