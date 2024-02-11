import React from "react";
import notFoundPageImage from "../../media/notFoundPageImage.jpg";
import style from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
import MainButton from "../../ui/Buttons/MainButton/mainButton";

export default function NotFoundPage() {
  return (
    <div className="wrapper">
      <div className={style.notFoundPageContainer}>
        <img
          className={style.notFoundPageImage}
          src={notFoundPageImage}
          alt="NotFoundPageImage"
        ></img>
        <Link to="/">
          <MainButton widthBtn='209' title='Go Home'/>
        </Link>
      </div>
    </div>
  );
}
