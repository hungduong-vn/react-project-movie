import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}
