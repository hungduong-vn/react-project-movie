import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./home.layout.scss";

export default function HomeLayout() {
  return (
    <div>
      <Header />
      <div className="mid-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
