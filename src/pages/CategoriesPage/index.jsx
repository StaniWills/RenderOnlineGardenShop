import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "./../../requests/categories_req";
import CategoryCard from "./../../components/CategoryCard";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, []); // dostaem iz servera

  return (
    <section className={s.categories_page}>
      <h1 className={s.title}>Categories</h1>
      <div className={s.categories_container}>
        {categories.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
