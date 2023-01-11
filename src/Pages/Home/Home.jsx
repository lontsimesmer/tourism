import React from 'react';
import "./Home.css"
import nature10 from "../../assets/images/nature10.png";

export const Home = () =>  {
  return (
    <div className='Home'>
      <div>
        <img src={nature10} alt="nature" />
      </div>
    </div>
  )
}
