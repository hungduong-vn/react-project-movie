import React from "react";
import Slider from "react-slick";
import { isImgFit } from "../../../utils/helper";
import HomeMovie from "../HomeMovie/HomeMovie";

let slidesToShow = 4;
// console.log("View Width:", window.innerWidth);
if (window.innerWidth > 1400) {
  slidesToShow = 5;
} else if (window.innerWidth > 1200) {
  slidesToShow = 4;
} else if (window.innerWidth > 800) {
  slidesToShow = 3;
} else if (window.innerWidth > 500) {
  slidesToShow = 2;
} else {
  slidesToShow = 1;
}

export default function HomeMoviesMultiple({ movieList }) {
  // console.log({ movieList });
  const moviesCount = movieList.length;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: moviesCount > 5 ? slidesToShow : moviesCount,
    speed: 500,
    rows: moviesCount > 10 ? 2 : 1,
    slidesPerRow: 1,
    dots: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {movieList.slice(0, 20).map((ele) => {
          return (
            <div key={ele.maPhim} className="d-flex justify-center">
              <HomeMovie movie={ele} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
