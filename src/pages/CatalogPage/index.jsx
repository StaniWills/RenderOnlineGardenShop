import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_products } from "../../requests/products_req";
import ProductCard from "../../components/ProductCard";
import { sortProducts } from "../../store/reducers/products_from_category";
import { searchByPrice } from "../../store/reducers/products_from_category";
import s from "./index.module.css";

export default function ProductsPage({ title }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  useEffect(() => {
    dispatch(load_products);
  }, []);

  const sort_products = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  const search = (e) => {
    e.preventDefault();
    dispatch(searchByPrice({ min, max }));
  };

  const handleMinChange = (e) => {
    setMin(e.target.value);
    dispatch(searchByPrice({ min: e.target.value, max }));
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
    dispatch(searchByPrice({ min, max: e.target.value }));
  };

  const discontProducts = products.filter(
    (el) => el.price !== el.discont_price
  );

  return (
    <section className={s.products_section}>
      <h1>Products{title}</h1>
      <div className={s.search_panel}>
        <div className={s.search_container}>
          <form className={s.search_form} onSubmit={search}>
            <span>Price</span>
            <input
              name="min"
              placeholder="from"
              onInput={handleMinChange}
            />
            <input
              name="max"
              placeholder="to"
              onInput={handleMaxChange}
            />
          </form>
        </div>
        <div className={s.select_container}>
          <span>Sorted</span>
          <select onInput={sort_products} className={s.select}>
            <option value="default"> by default</option>
            <option value="price"> by price</option>
            <option value="title">by name</option>
            <option value="discont">by discont</option>
          </select>
        </div>
      </div>

      <div className={s.products_container}>
        {discontProducts
          .filter((el) => !el.hide)
          .map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
      </div>
    </section>
  );
}
