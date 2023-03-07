import React, { useEffect } from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../CategoryCard";
import { load_categories } from "../../../requests/categories_req";

export default function ContainerCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, [dispatch]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.categories_list}>
          <h1 className={s.title}>Categories</h1>

          <Link to="categories">
            <button>All categories </button>
          </Link>
        </div>
        <div className={s.catalog}>
          {categories.slice(0, 4).map((el) => (
            <CategoryCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
