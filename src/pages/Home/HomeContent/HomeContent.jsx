import React from "react";
import HomeCarousel from "../../../components/Home/HomeCarousel/HomeCarousel";
import HomeMenu from "../../../components/Home/HomeMenu/HomeMenu";
import HomeMovies from "../../../components/Home/HomeMovies/HomeMovies";

export default function HomeContent() {
  return (
    <>
      <HomeCarousel />
      <HomeMovies/>
      <HomeMenu/>
    </>
  );
}
