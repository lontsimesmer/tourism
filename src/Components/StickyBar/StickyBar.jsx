import React from 'react';
import Styles from './StickyBar.module.css'
import phone from '../../assets/images/phone.png';
import mail from '../../assets/images/mail.png';

export default function StickyBar() {
  return (
    <section className={Styles.Sticky__bar}>
      <div className={Styles.StickyBar__logo}>
        <img src={phone} alt="phone" />
        <span className={Styles.Icons__name}>+250 784 688 641</span>
        <img src={mail} alt="mail" />
        <span className={Styles.Icons__name}>bbonteemma@gmail.com</span>
      </div>
      <div className={Styles.StickyBar__icons}>
        <div className={Styles.Circle__icons}>
          <span><i class="fa-brands fa-facebook-f"></i></span>
        </div>
        <div className={Styles.Circle__icons}>
          <span><i class="fa-brands fa-twitter"></i></span>
        </div>
        <div className={Styles.Circle__icons}>
          <span><i class="fa-brands fa-linkedin-in"></i></span>
        </div>
        <div className={Styles.Circle__icons}>
          <span><i class="fa-brands fa-instagram"></i></span>
        </div>
      </div>
    </section>
  )
}
