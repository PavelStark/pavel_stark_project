import React from "react";
import { useDispatch } from "react-redux";
import { filterBySaleAction, sortAction } from "../../store/reducers/productsReducer";
import style from "./FilterProducts.module.css";

export default function FilterProducts({type}) {
  const dispatch = useDispatch();

  
  function SaleHandleBox(event) {
    dispatch(filterBySaleAction(event.target.checked))
  }

  function Sort(event) { 
    dispatch(sortAction(event.target.value))
  }

  return (
    <div className={style.SortAllContainer}>
      <div className={style.PriceSortContainer}>
        <label>Price</label>
        <input type="text" placeholder="from" />
        <input className={style.child} type="text" placeholder="to" />
      </div>
      <div className={style.filterContainer} style={{ display: type === "allSales" ? "none" : "flex" }}>
        <label>Discounted items</label>
        <input onClick={SaleHandleBox} type="checkbox" />
      </div>
      <div className={style.SortedContainer}>
        <label>Sorted</label>
        <select onChange={Sort} id="dropdown" name="Sort">
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="price_low_hight">price: low-high</option>
          <option value="price_hight_low">price: high-low</option>
          <option style={{ display: type !== "allSales" ? "none" : "flex" }} value="sale_low_hight">sale: low-high</option>
          <option style={{ display: type !== "allSales" ? "none" : "flex" }} value="sale_hight_low">sale: high-low</option>
          <option value="title_A_Z">title: A-Z</option>
          <option value="title_Z_A">title: Z-A</option>
        </select>
      </div>
    </div>
  );
}
