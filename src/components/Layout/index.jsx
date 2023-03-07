import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";
import s from "./index.module.css";

export default function Layout() {
  return (
    <div>
      <Nav />
      <main className={s.outlet}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
