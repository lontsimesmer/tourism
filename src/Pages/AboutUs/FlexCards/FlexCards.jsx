import React from "react";
import Styles from "./FlexCards.module.css";
import line2 from "../../../assets/images/line2.png";
import cabane from "../../../assets/images/cabane.png";
import bridge from "../../../assets/images/bridge.png";
import iland from "../../../assets/images/iland.png";

export default function FlexCards() {
  return (
    <section>
      <p className={Styles.Page__Heading}>Welcome to Africa Wizzy Safari</p>
      <div className={Styles.Heading__line}>
        <img src={line2} alt="line" />
      </div>
      <div></div>
    </section>
  );
}
