import React, { Component } from "react";
import Slider from "react-slick";
import HomeMovie from "../HomeMovie/HomeMovie";

export default class HomeMoviesMultiple extends Component {
  render() {
    const { movieList } = this.props;
    console.log({movieList});
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
          {movieList.map((ele) => (
            <HomeMovie movie={ele} key={ele.maPhim} />
          ))}
        </Slider>
      </div>
    );
  }
}
