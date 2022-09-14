import React from "react";
import Slider from "react-slick";
import { isImgFit } from "../../../utils/helper";
import HomeMovie from "../HomeMovie/HomeMovie";

let slidesToShow = 4;
const viewWidth = window.innerWidth;
console.log("View Width:", window.innerWidth);
if (viewWidth > 1340) {
  slidesToShow = 5;
} else if (viewWidth > 1200) {
  slidesToShow = 4;
} else if (viewWidth > 800) {
  slidesToShow = 3;
} else if (viewWidth > 500) {
  slidesToShow = 2;
} else {
  slidesToShow = 1;
}

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
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    slidesToShow,
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
