import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../asyncActions";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import style from "./SigleProductContainer.module.css"
import MainButton from "../../ui/Buttons/MainButton/mainButton";
import plus from "../../ui/plus.png"
import minus from "../../ui/minus.png"
import { changeCountItemAction } from "../../store/reducers/singleProductReducer";
import { addItemAction } from "../../store/reducers/cartReducer";

export default function SingleProductContainer() {

  const product = useSelector(store => store.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [ dispatch, id]);

  //-----------------------------------------------------------------


  function priceHandle(elem) {

    let truePrice = 0;

    if (elem.discont_price) {
      truePrice = "$" + elem.discont_price;
    } else if (!elem.discont_price) {
      truePrice = "$" + elem.price;
    }
    return truePrice;
  }

  function saleHandle(elem) {
    let sale = 0;

    if (elem.discont_price) {
      sale =
        "-" + Math.round(100 - (elem.discont_price * 100) / elem.price) + "%";
    } else sale = "";
    return sale;
  }

  console.log(product)


  //-----------------------------------------------------------------------------
  
  return (
    <div className={style.singleProductContainer}>
      <div className={style.asd}>
        <img alt="Product" src={ROOT_URL + product.image} />
        </div>
      
      <div className={style.info}>
        <h2 className={style.title}>{product.title}</h2>

        <div className={style.priceContainer}>
          <p className={style.salePrice}>{priceHandle(product)}</p>
          <p className={style.price}>{product.discont_price ? "$" + product.price : ""}</p>
          <div className={style.salePercentContainer} style={{ display: product.discont_price ? "block" : "none" }}>
            <p className={style.salePercent}>{saleHandle(product)}</p>
          </div>
        </div>
        <div className={style.addProductContainer}>
            <div className={style.plusAndMinusContainer}>
            <div onClick={() => dispatch(changeCountItemAction(-1))} className={style.minus}>
              <img src={minus} alt="" />
            </div>
            <div className={style.number}>
              <p>{product.count}</p>
              </div>
            <div onClick={() => dispatch(changeCountItemAction(1))} className={style.plus}>
              <img src={plus} alt="" />
            </div>
            <MainButton onClick={() => dispatch(addItemAction(product))} widthBtn="316" title="Add to cart"/>
          </div>
          <div className={style.descriptionContainer}></div>
          <p className={style.textTitle}>Description</p>
          <p className={style.text}>{product.description}</p>
          </div>
      </div>
    </div>
  );
}
