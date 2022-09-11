import React, { Component } from "react";
import Slider from "react-slick";
import { isImgFit } from "../../../utils/helper";
import HomeMovie from "../HomeMovie/HomeMovie";

export default function HomeMoviesMultiple({ movieList }) {
  const sortFitImg = async (movies) => {
    const result = [];
    for (let movie of movies) {
      if (await isImgFit(movie.hinhAnh)) {
        result.push(movie);
      }
    }
    // console.log("Sorted Fit Movies:", result);
    return result;
  };
  // console.log({ movieList });
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {movieList.map((ele) => {
          return <HomeMovie movie={ele} key={ele.maPhim} />;
        })}
      </Slider>
    </div>
  );
}
