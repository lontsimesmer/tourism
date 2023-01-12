import React from 'react';
import Styles from './PageImage.module.css'

export default function PageImage() {
  return(
    <section className={Styles.Page__image}>
      <div className={Styles.Image__text}>
        <h1>Experience the beauty of Rwanda with us</h1>
        <h2>Discover the Land of a Thousand Hills</h2>
      </div>
      {/* <div className={Styles.ArrowBack__icon}>
        <span><i class="material-symbols-outlined">arrow_back_ios</i></span>
      </div>
      <div className={Styles.ArrowBack__icon}>
        <span ><i class="material-symbols-outlined">arrow_forward_ios</i></span>
      </div> */}
      <div className={Styles.Horizontal__bar}>
        <input placeholder='Search activities or Destinations' type='text' />
        <button className={Styles.Booknow__btn}>Book Now</button>
      </div>
    </section>
  )
}
