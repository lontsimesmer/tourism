import React from "react";
import Styles from "./PageImage.module.css";
import {
  Button,
  Captions,
  Heading1,
  Input,
  Texte,
} from "../../../Components/Atoms";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

export default function PageImage() {
  return (
    <section className={Styles.Page__image}>
      <div className={Styles.Image__text}>
        <Heading1 style={{ width: "60%" }}>
          Experience the beauty of Rwanda with us
        </Heading1>
        <Texte className={Styles.subheading}>
          Discover the Land of a Thousand Hills
        </Texte>
      </div>
      <div className={Styles.Arrow__icons}>
        <div className={Styles.circle}>
          <AiOutlineLeft className={Styles.outLine} />
        </div>
        <div className={Styles.circle}>
          <AiOutlineRight className={Styles.outLine} />
        </div>
      </div>
      <div className={Styles.barContainer}>
        <div className={Styles.Horizontal__bar}>
          <div className={Styles.barItems}>
            <Input
              placeholder="Search activities or Destinations"
              type="text"
            />
            <div className={Styles.search__icon}>
              <AiOutlineSearch className={Styles.search} />
            </div>
            <div className={Styles.Bar__text}>
              <div className={Styles.dropDown}>
                <Captions>Guest</Captions>
                <div className={Styles.headIcons}>
                  <Texte className={Styles.Headlines}>2 Adult</Texte>
                  <FaChevronDown className={Styles.down} />
                </div>
              </div>
              <div className={Styles.dropDown}>
                <Captions>Date</Captions>
                <div className={Styles.headIcons}>
                  <Texte className={Styles.Headlines}>12 - 13 April 2021</Texte>
                  <FaChevronDown className={Styles.down} />
                </div>
              </div>
              <div className={Styles.dropDown}>
                <Captions>Package</Captions>
                <div className={Styles.headIcons}>
                  <Texte className={Styles.Headlines}>All</Texte>
                  <FaChevronDown className={Styles.down} />
                </div>
              </div>
            </div>
            <Button className={Styles.barBtn}>Book Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
