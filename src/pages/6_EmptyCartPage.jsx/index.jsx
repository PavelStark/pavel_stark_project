import React from "react";
import LinkButtonContainer from "../../components/12_LinkButtonContainer";
import LinkButton from "../../ui/Buttons/LinkButton/linkButton";
import style from "./EmptyCartPage.module.css";
import MainButton from "../../ui/Buttons/MainButton/mainButton";
import { Link } from "react-router-dom";

export default function EmptyCartPage() {
  return (
    <div>
      <div className={style.linkButtonAllContainer}>
        <LinkButtonContainer title="Shopping cart" />

        <LinkButton link="/products/all" buttonText="Back to the store" />
      </div>
      <p className={style.emptyBasketText}>
        Looks like you have no items in your basket currently.
      </p>
      <div className={style.buttonContainer}>
        <Link to="/products/all">
          <MainButton widthBtn="313" title="Continue Shopping" />
        </Link>
      </div>
    </div>
  );
}
