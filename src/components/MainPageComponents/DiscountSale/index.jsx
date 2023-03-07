import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../ProductCard";
import { load_products } from "../../../requests/products_req";
import s from "./index.module.css";

export default function DiscountSale() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(load_products);
  }, [dispatch]);

  let array = products
    .filter((el) => el.price !== el.discont_price)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  return (
    <section id="sale" className={s.section_discount}>
      <div className={s.container_section_discount}>
        <div className={s.section_section_discount}>
          <h1 className={s.title}>Sale</h1>
        </div>
        <div className={s.section_section_discount}>
          {array.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
