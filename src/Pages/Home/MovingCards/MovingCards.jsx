import React from "react";
import Styles from "./MovingCards.module.css";
import { Body, Button, Heading2, Heading3, Heading5 } from "../../../Components/Atoms";
import { Group } from "../../../Components/Molecule";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const paysage = [
  {
    image:
      "https://cdn2.opendemocracy.net/media/images/kigali3_gF0kWcJ.width-800.jpg",
    title: "Kigali",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/National_Museum_of_Rwanda_-_Butare_-_Flickr_-_Dave_Proffer_%284%29.jpg",
    title: "Huye",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image:
      "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2020/11/05/rubavu-large.jpg",
    title: "Rubavu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dc/3a/eb/mountain-gorilla-naming.jpg?w=1600&h=900&s=1/",
    title: "Musanze",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
  },
];

export default function MovingCards() {
  return (
    <section>
      <Group style={{ marginTop: "-10px" }}>
        <Heading3>Popular Destinations</Heading3>
        <Heading2>
          Select Our Best Popular <br /> Destinations
        </Heading2>
      </Group>
      <div className={Styles.Arrow__button}>
        <Button className={Styles.buttonLeft}>
          <HiOutlineChevronLeft className={Styles.left} />
        </Button>
        <Button className={Styles.buttonRight}>
          <HiOutlineChevronRight style={{ fontSize: "24px" }} />
        </Button>
      </div>
      <div className={Styles.movingCards}>
        {paysage.map((City) => (
          <div className={Styles.City}>
            <img src={City.image} alt="city" />
            <div className={Styles.cityItems}>
            <Heading5 style={{ fontSize: "39px" }}>{City.title}</Heading5>
            <Body className={Styles.Description}>{City.description}</Body>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
