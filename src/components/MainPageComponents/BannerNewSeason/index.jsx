import React from "react";
import s from "./index.module.css";

export default function BannerNewSeason() {
  return (
    <section className={s.section_sale_season}>
      <div className={s.section_container}>
        <div className={s.section_content}>
          <h1 className={s.title}>Sale </h1>
          <h2 className={s.sub_title}>New season</h2>
          <div className={s.button_cont}>
            <button>All Sale</button>
            <button>Learn more . .</button>
          </div>
        </div>
        <div className={s.image_box}>
          <img className={s.image} src="./picData/Garden2.png" alt="" />
        </div>
      </div>
    </section>
  );
}
