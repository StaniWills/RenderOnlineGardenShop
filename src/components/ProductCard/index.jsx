import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/reducers/cart";
import { useDispatch } from "react-redux";

export default function ProductCard({id, image, price, title, discont_price,}) {
  const dispatch = useDispatch();

  const add_to_cart = () =>
    dispatch(addToCart({ id, image, price, title, discont_price }));

  const discont = Math.round(((price - discont_price) / price) * 100);

  return (
    <div className={s.product_card_container}>
      <div className={s.card_item}>
        <Link to={`/products/${id}`}>
          <img
            className={s.image}
            src={`https://renderonlinegardenshopback.onrender.com${image}`}
            alt="pic"
          />
        </Link>
        <button onClick={add_to_cart} className={s.button}>
          Add to cart
        </button>
      </div>
      <div className={s.price_container}>
        <p className={s.discont_price}>
          {discont_price}
          <span>$</span>
        </p>
        {discont !== 0 && <p className={s.price}>{price}$</p>}
        {discont !== 0 && <p className={s.discont}>-{discont}%</p>}
      </div>
      <p className={s.title}>{title}</p>
    </div>
  );
}
