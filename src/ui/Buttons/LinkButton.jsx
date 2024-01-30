import React from "react";
import style from "./LinkButton.module.css";
import { Link } from 'react-router-dom'

export default function LinkButton({ buttonText, asd }) {
    return (
      <Link to={asd}>
            <button className={style.linkButton}>{buttonText}</button>
            </Link>
  );
}
