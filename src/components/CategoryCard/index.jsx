import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className={s.catalog_card}>
      <Link to={`/categories/${id}`}>
        <img
          className={s.image}
          src={`https://renderonlinebackgardenshop.onrender.com/${image}`}
          alt={title}
        />
      </Link>
      
      <h3 className={s.card_title}>{title}</h3>
    </div>
  );
}
