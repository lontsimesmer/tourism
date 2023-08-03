import React from "react";
import Styles from "./DisplayCards.module.css";
import giraffe from "../../assets/images/giraffe.png";
import stream from "../../assets/images/stream.png";
import boat from "../../assets/images/boat.png";
import { Button, Heading2, Heading3, Heading5 } from "../Atoms";
import { Group } from "../Molecule";

const cards = [
  {
    image: giraffe,
    title: "Akagera National Park",
    description:
      "Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.",
  },
  {
    image: stream,
    title: "Bisoke Hike",
    description:
      "The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.",
  },
  {
    image: boat,
    title: "Lake Kivu trip",
    description:
      "A trip to Lake Kivu can be a truly unique and memorable experience.",
  },
];

const card = [
  {
    image: giraffe,
    title: "Akagera National Park",
    description:
      "Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.",
  },
  {
    image: stream,
    title: "Bisoke Hike",
    description:
      "The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.",
  },
  {
    image: boat,
    title: "Lake Kivu trip",
    description:
      "A trip to Lake Kivu can be a truly unique and memorable experience.",
  },
];

export default function DisplayCards() {
  return (
    <section>
      <Group style={{ margin: "70px 0 50px 0" }}>
        <Heading3>Choose your Package</Heading3>
        <Heading2>
          Select your Best Package <br /> for your Travel
        </Heading2>
      </Group>
      <div className={Styles.Cards__display}>
        {cards.map((Card) => (
          <div className={Styles.Card}>
            <img src={Card.image} alt="cards" />
            <div className={Styles.cardItems}>
              <Heading5 className={Styles.Title}>{Card.title}</Heading5>
              <div className={Styles.Button__space}>
                <p className={Styles.Description}>{Card.description}</p>
                <Button className={Styles.learnMore}>Learn more</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.Cards__display}>
        {card.map((Card) => (
          <div className={Styles.Card}>
            <img src={Card.image} alt="cards" />
            <div className={Styles.cardItems}>
              <Heading5 className={Styles.Title}>{Card.title}</Heading5>
              <div className={Styles.Button__space}>
                <p className={Styles.Description}>{Card.description}</p>
                <Button className={Styles.learnMore}>Learn more</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
