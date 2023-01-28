import React from "react";
import StickyBar from "../../Components/StickyBar/StickyBar";
import CardText from "./CardText/CardText";
import NavBar from "./NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function AboutUs() {
  return (
    <div>
      <StickyBar />
      <CardText />
      <NavBar />
      <Footer />
    </div>
  );
}
