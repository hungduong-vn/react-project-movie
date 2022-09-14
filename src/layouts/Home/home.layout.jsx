import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./home.layout.scss";
import SorryPage from "../SorryPage/SorryPage";
import { useState } from "react";

export default function HomeLayout() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  window.onresize = () => {
    if (window.innerWidth < 1024) {
      setIsScreenSmall(true);
    } else {
      setIsScreenSmall(false);
    }
  };
  if (isScreenSmall) {
    return <SorryPage />;
  } else {
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
}
