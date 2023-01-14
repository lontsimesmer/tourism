import React from "react";
import Styles from './Testimony.module.css';
import car from '../../../assets/images/car.png'
import circle from '../../../assets/images/circle.png'
import contact from '../../../assets/images/contact.png'
import hand from '../../../assets/images/hand.png'

export default function Testimony() {
  return(
    <section>
      <div className={Styles.Head__title}>
        <h3>Why us?</h3>
        <h4>Why Travel with Africa <br /> wizzy Safari</h4>
      </div>
      <div className={Styles.Multiple__bar}>
        <div className={Styles.Icon__block}>
          <img src={car} alt="car" />
          <p className={Styles.quality}>100+ tours around Rwanda</p>
        </div>
        <div className={Styles.Icon__block}>
          <img src={circle} alt="circle" />
          <p className={Styles.quality}>100% Trusted travel agency</p>
        </div>
        <div className={Styles.Icon__block}>
          <img src={contact} alt="contact" />
          <p className={Styles.quality}>10 years of travel experience</p>
        </div>
        <div className={Styles.Icon__block}>
          <img src={hand} alt="hand" />
          <p className={Styles.quality}>90% of travelors are happy</p>
        </div>
      </div>
      <div className={Styles.Headline__title}>
        <h3>Our Traveller Say</h3>
        <h4>What our clients say <br /> about us</h4>
      </div>
    </section>
  )
}