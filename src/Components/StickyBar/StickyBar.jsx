import React from 'react';
import Styles from './StickyBar.module.css'

export default function StickyBar() {
  return (
    <section className={Styles.Sticky__bar}>
      <div className={Styles.StickyBar__logo}>
        <span className={Styles.Sticky__icons}><i class="fa-solid fa-phone-flip"></i></span>
        <span className={Styles.Icons__name}>+250 784 688 641</span>
      </div>
      <div className={Styles.StickyBar__logo}>
        <span className={Styles.Sticky__icons}><i class="material-symbols-outlined">mail</i></span>
        <span className={Styles.Icons__name}>bbonteemma@gmail.com</span>
      </div>
      <div>
        <span className={Styles.Circle__icons}><i class="fa-brands fa-facebook-f"></i></span>
        <span className={Styles.Circle__icons}><i class="fa-brands fa-twitter"></i></span>
        <span className={Styles.Circle__icons}><i class="fa-brands fa-linkedin-in"></i></span>
        <span className={Styles.Circle__icons}><i class="fa-brands fa-instagram"></i></span>
      </div>
    </section>
  )
}
