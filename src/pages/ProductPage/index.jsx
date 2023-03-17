import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "./../../requests/product_req";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/reducers/cart";

import { Link } from "react-router-dom";
import s from "./index.module.css";

export default function ProductPage() {   //straniza zelogo produkta
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(load_product(id));
  }, [dispatch, id]);

  const { price, description, image, discont_price, title } = product;

  const add_to_cart = () =>
    dispatch(
      addToCart({
        id: +id,
        image,
        price,
        description,
        discont_price,
        title,
      })
    );

  const discont = Math.round(((price - discont_price) / price) * 100);

  return (
    <section className={s.product_page}>
      <h2>Name: {title}</h2>
      <div className={s.product_container}>
        <img
          className={s.product_image}
          src={`https://renderonlinegardenshopback.onrender.com/${image}`}
          alt="foto"
        />
        <div className={s.description_container}>
          <div className={s.price_container}>
            <p>
              {discont_price}
              <span>$</span>{" "}
            </p>
            {discont !== 0 && <p>{price}$</p>}
            {discont !== 0 && <p>-{discont}%</p>}
          </div>
          <Link to="/cart">
            <button onClick={add_to_cart}>To cart</button>
          </Link>
          <div className={s.descr}>
            <h3> Description</h3>
            <p>Description {description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
