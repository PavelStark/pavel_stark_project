import React from "react";
import style from "./CartContainer.module.css";
import LinkButton from "../../ui/Buttons/LinkButton/linkButton";
import LinkButtonContainer from "../../components/12_LinkButtonContainer";
import { useDispatch, useSelector } from "react-redux";
import { ROOT_URL } from "../..";
import plus from "../../ui/plus.png";
import minus from "../../ui/minus.png";
import { changeCountCartItemAction } from "../../store/reducers/cartReducer";

export default function CartContainer() {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  console.log(items);

  return (
    <div>
      <div className={style.linkButtonAllContainer}>
        <LinkButtonContainer title="Shopping cart" />
        <LinkButton buttonText="Back to the store" link="/products/all" />
      </div>
      {items.map((elem) => ( 
        <div className={style.cartContainer}>
          <div className={style.imageContainer}>
           <img src={ROOT_URL + elem.image} alt="Item" />
          </div>
          
          <div className={style.cartInfoContainer}>
           <div className={style.TitleAndCloseContainer}>
              <p>{elem.title}</p>
              <span>✖</span>  
            </div>
            
          <div className={style.plusMinusAndPriceContainer}>
            <div className={style.plusMinusContainer}>
                <div onClick={() => dispatch(changeCountCartItemAction(-1))} className={style.minus}>
                  <img src={minus} alt="" />
                </div>
            <div className={style.number}>
                <p>{elem.count}</p>
            </div>
            <div onClick={() => dispatch(changeCountCartItemAction(1))} className={style.plus}>
                  <img src={plus} alt="" />
            </div>
          </div>
            <div className={style.priceContainer}>
                <p> {elem.discont_price ? "$" + elem.discont_price : "$" + elem.price} </p>
                <p className={style.sale}> {elem.discont_price ? "$" + elem.price : ""} </p>
            </div>
        </div>
        </div>
      </div>
      ))}
    </div>
  );
}

/* 
      <div className={style.plusAndMinusContainerAndPrice}>
        <div className={style.plusAndMinusContainer}>
        <div
          onClick={() => dispatch(changeCountCartItemAction(-1))}
          className={style.minus}>
          <img src={minus} alt="" />
        </div>
        <div className={style.number}>
          <p>{elem.count}</p>
        </div>
        <div
          onClick={() => dispatch(changeCountCartItemAction(1))}
          className={style.plus}>
          <img src={plus} alt="" />
        </div>
        </div>
        <p>{elem.price}</p>
        <p>{elem.discont_price}</p>
      </div>
*/