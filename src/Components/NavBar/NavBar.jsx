import React from 'react';
import "./NavBar.css"
import logo from '../../assets/images/logo.png'

export const NavBar = () => {

    return (
      <section className='NavBar'>
        <div className='photo'>
          <img src={logo} href='logo'></img>
        </div>
        <div className='components'>
          <a href='#HOME'>Home</a>
          <a href='#ABOUT'>About</a>
          <a href='#TOUR-PACKAGE'>Tour package</a>
          <a href='#GALLERY'>Gallery</a>
          <a href='#BLOG'>Blog</a>
          <a href='#CONTACT'>Contact</a>
        </div>
        <button>Sign In</button>
      </section>
    );
  }
