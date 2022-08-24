import React from "react";
import HomeCarousel from "../../../components/HomeCarousel/HomeCarousel";
import HomeMenu from "../../../components/HomeMenu/HomeMenu";
import HomeMovies from "../../../components/HomeMovies/HomeMovies";

export default function HomeContent() {
  return (
    <>
      <HomeCarousel />
      <HomeMovies/>
      <HomeMenu/>
    </>
  );
}
