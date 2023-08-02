import React from "react";
import Styles from "./StickyBar.module.css";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import phone from "../../assets/images/phone.png";
import mail from "../../assets/images/mail.png";
// import icons from "../../assets/images/icons.png";

export default function StickyBar() {
  return (
    <section className={Styles.Sticky__bar}>
      <div className={Styles.StickyBar__items}>
        <div className={Styles.LeftItems}>
          <div className={Styles.Logo}>
            <img src={phone} alt="phone" style={{ cursor: "pointer" }} />
            <span className={Styles.name}>+250 784 688 641</span>
          </div>
          <div className={Styles.Logo}>
            <img src={mail} alt="mail" style={{ cursor: "pointer" }} />
            <span className={Styles.name}>bbonteemma@gmail.com</span>
          </div>
        </div>
        <div className={Styles.Icons}>
          <div className={Styles.iconfield}>
            <BiLogoFacebook style={{ color: "#fff" }} />
          </div>
          <div className={Styles.iconfield}>
            <BiLogoTwitter style={{ color: "#fff" }} />
          </div>
          <div className={Styles.iconfield}>
            <BiLogoLinkedin style={{ color: "#fff" }} />
          </div>
          <div className={Styles.iconfield}>
            <BiLogoInstagramAlt style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
