import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROOT_URL } from "../..";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "../../asyncActions/products";
import style from "./AllSalesContainer.module.css";

function AllSalesContainer({ type }) {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllProducts(type));
  }, [id, type]);

  let price = 0;
  let truePrice = 0;

  function priceHandle(elem) {
    if (elem.discont_price) {
      truePrice = "$" + elem.discont_price;
      price = "$" + elem.price;
    } else if (!elem.discont_price) {
      truePrice = "$" + elem.price;
      price = "";
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

  //-------------------------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <div>
        <div className={style.allSalesContainer}>
          {products.map((elem) => (
            <div>
              <div className={style.imageContainer}>
                <img alt="Sales" src={ROOT_URL + elem.image} />
                <div
                  className={style.salePercent}
                  style={{ display: elem.discont_price ? "block" : "none" }}
                >
                  <p>{saleHandle(elem)}</p>
                </div>
                <p className={style.itemTitle}>{elem.title}</p>
                <div className={style.priceContainer}>
                  <p>{priceHandle(elem)}</p>
                  <p className={style.sale}> {price} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllSalesContainer;
