import React from "react";
export default function CinemaTabPane({ cinema, logo }) {
  return (
    <div className="row theaterInfo">
      <div className="col-3">
        <img
          className="img-fluid"
          src={logo}
          alt={cinema.tenCumRap}
        />
      </div>
      <div className="col-9 text-left theaterText">
        <h1>{cinema.tenCumRap}</h1>
        <p className="theaterAddress">{cinema.diaChi}</p>
      </div>
    </div>
  );
}
