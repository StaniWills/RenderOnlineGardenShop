import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { incrementCount, decrementCount, removeFromCart, } from "../../store/reducers/cart";

export default function CartCard({
  id, title, price, image, discont_price, count,}) {
  const dispatch = useDispatch();
  
  const increment = () => dispatch(incrementCount(id));
  const decrement = () => dispatch(decrementCount(id));
  const remove = () => dispatch(removeFromCart(id));

  return (
    <div className={s.cart_card}>
      <img src={`https://gardenshopback.onrender.com/${image}`} alt="foto" />
        <div>
          <p className={s.title}>{title}</p>
            <div className={s.count_container}>
              <p onClick={decrement}><AiOutlineMinus /></p>
              <p>{count}</p>
              <p onClick={increment}><AiOutlinePlus /></p>
            </div>
        </div>
        <div className={s.price_container}>
          <p className={s.discont_price}>{(discont_price * count).toFixed(2)}
          <span className={s.dolar}>$</span>{" "}</p>
          <p className={`${s.price} ${price === discont_price ? s.hidden : ""}`}>{price}$</p>
          <p onClick={remove} className={s.delete_btn}><AiOutlineClose /></p>
        </div>
    </div>
  );
}
