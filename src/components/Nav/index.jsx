import React from "react";
import { AiOutlineMenu, AiOutlineShopping, AiOutlinePhone, AiOutlinePercentage, AiOutlineGift } from 'react-icons/ai';
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Nav() {


  return (
    <header>
      <nav className={s.nav}>
        <div className={s.logo_btn}>
        <Link to="/" className={s.logo}>
          <img src="./picData/logo.png" alt="logo" />
        </Link>

        <Link to="catalog" className={s.catalog}>
        
          <button>Catalog</button>
        </Link>
        </div>

        <menu className={s.menu}>
        <Link to="categories" className={s.list_item}><AiOutlineMenu/>
          Categories
        </Link>

        <HashLink className={s.list_item} to="/#coupon" smooth={true} offset={-100} duration={1000}>
          <AiOutlineGift/>Coupon
        </HashLink>

        <HashLink className={s.list_item} to="/#sale" smooth={true} offset={-100} duration={1000}>
          <AiOutlinePercentage/>Sale
        </HashLink>

        <HashLink className={s.list_item} to="/#footer" smooth={true} duration={1000}>
          <AiOutlinePhone/>Contact
        </HashLink>

        <Link className={s.list_item} to="cart">
          <AiOutlineShopping />
        </Link>
        </menu>
      </nav>
    </header>
  );
}
