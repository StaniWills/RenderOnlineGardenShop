import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTelephoneNumber } from "../../../store/reducers/phone";
import s from "./index.module.css";

export default function BannerSale() {
  const dispatch = useDispatch();
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [error, setError] = useState("");
  const phone = useSelector((state) => state.telephoneNumber);
  console.log(phone); // array of tel

  const validateTelephoneNumber = (telephoneNumber) => {
    const telephoneNumberRegex = /^\+49\d{8}$/;
    return telephoneNumberRegex.test(telephoneNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateTelephoneNumber(telephoneNumber)) {
      setError("Enter a telephone number in format: +49 xxx xxx !");
      return;
    }
    dispatch(addTelephoneNumber(telephoneNumber));
    setTelephoneNumber("");
    setError("");
  };
  const handleFocus = () => {
    setTelephoneNumber("");
    setError("");
  };

  return (
    <section id="coupon" className={s.section}>
      <div className={s.container}>
        <div className={s.left}>
          <img src='./picData/dwarf.png' alt="dwarf pic" />
        </div>
        <div className={s.container_content}>
          <h1 className={s.title}>5% off </h1>
          <h2 className={s.sub_title}>on the first order</h2>
          <form>
            {error && <div className={s.error}>{error}</div>}
            <input
              placeholder="+49"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              onFocus={handleFocus}
            />
            <button onClick={handleSubmit}>Get a discount</button>
          </form>
        </div>
      </div>
    </section>
  );
}
