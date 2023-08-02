import React from "react";
import Styles from "./NavBar.module.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/Atoms";

export default function NavBar() {
  return (
    <section className={Styles.NavBar}>
      <div className={Styles.NavBar__items}>
        <img src={logo} alt="logo"></img>
        <div className={Styles.Attributes}>
          <a href="home">Home</a>
          <Link to="about">About</Link>
          <a href="tour-package">Tour package</a>
          <a href="gallery">Gallery</a>
          <a href="blog">Blog</a>
          <a href="contact">Contact us</a>
        </div>
      </div>
      <Button className={Styles.navBtn}>Sign In</Button>
    </section>
  );
}
