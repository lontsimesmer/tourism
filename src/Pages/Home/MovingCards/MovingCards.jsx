import React from "react";
import Styles from "./MovingCards.module.css";
import Bttn from '../../../assets/images/Bttn.png'
import Button from '../../../assets/images/Button.png'
import kigali from '../../../assets/images/kigali.png';
import huye from '../../../assets/images/huye.png';
import rubavu from '../../../assets/images/rubavu.png';
import musanze from '../../../assets/images/musanze.png';

const paysage = [
  {
    image: kigali,
    title: "Kigali",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image: huye,
    title: "Huye",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image: rubavu,
    title: "Rubavu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image: musanze,
    title: "Musanze",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  }
]

export default function MovingCards() {
  return(
    <section className={Styles.MovingCards}>
      <div className={Styles.Header__title}>
        <h3>Popular Destinations</h3>
        <h4>Select Our Best Popular <br /> Destinations</h4>
      </div>
      <div className={Styles.Arrow__button}>
        <img src={Bttn} alt="bttn" />
        <img src={Button} alt="button" />
      </div>
      <div className={Styles.Moving__cards}>
        {paysage.map((City) => (
          <div className={Styles.City}>
            <img src={City.image} alt="city" />
            <h5>{City.title}</h5>
            <p>{City.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}