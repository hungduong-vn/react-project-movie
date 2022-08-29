import React, { useState } from "react";
import { formatDate } from "../../../utils/helper";

import "./MovieInfo.scss";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
export default function MovieInfo({ info }) {
  console.log({ info });
  const [showTrailer, setShowTrailer] = useState(false);
  const handleTrailerClick = () => {
    setShowTrailer(true);
  };
  return (
    <div className="container">
      <div className="movieInfo__wrapper py-5 row">
        <div className="movieInfo__poster col-3">
          <img className="w-full" src={info.hinhAnh} alt={info.tenPhim} />
          <div className={`starburst example ${info.hot && "show"}`}>Hot</div>
        </div>
        <div className="movieInfo__detail col-9">
          <h1 className="movieInfo__name">{info.tenPhim}</h1>
          <p>{info.moTa}</p>
          <div>
            <span className="movieInfo__item">Rating: </span>
            <span className="movieInfo__rating">{info.danhGia}</span>/10
          </div>
          <div>
            <span className="movieInfo__item">Premier Date: </span>
            <span>{formatDate(info.ngayKhoiChieu, "DD/MM/YYYY")}</span>
          </div>
          <div className="movieInfo__btn__trailer">
            <button className="btn btn-dark" onClick={handleTrailerClick}>
              TRAILER
            </button>
          </div>
        </div>
      </div>
        {showTrailer && <MovieTrailer link={info.trailer} setShowState={setShowTrailer}/>}
    </div>
  );
}
