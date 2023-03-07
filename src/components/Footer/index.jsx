import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  
  return (
    <footer id='footer' className={s.footer}>
      <div className={s.left_footer}>
        <h3 className={s.contact}>Contacts:</h3>
        <p className={s.phone}>+49 123 456 789</p>
        <div>
          <div className={s.social}>
            <Link to="https://www.instagram.com/" target="_blank">
              <SlSocialInstagram className={s.instagram} />
            </Link>

            <p className={s.social_text}>Instagram</p>
          </div>
          <div className={s.social}>
            <Link to="https://www.whatsapp.com/" target="_blank">
              <SiWhatsapp className={s.whatsapp} />
            </Link>
            <p className={s.social_text}>WhatsApp</p>
          </div>
        </div>
      </div>
      <div className={s.right_footer}>
        <h1 className={s.title}>Address:</h1>
        <h2 className={s.sub_title}>Hanauer Landstraße 517-543, 60386 Frankfurt am Main, Deutschland</h2>
        <p className={s.work_hours}>Working Hours:</p>
        <p className={s.period}>24 hours a day</p>
      </div>
    </footer>
  );
}
