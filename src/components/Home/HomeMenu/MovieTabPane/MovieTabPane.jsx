import React from "react";
export default function MovieTabPane({ film }) {
  return (
    <div className="movieInfo d-flex">
      <img width={100} src={film.hinhAnh} alt={film.tenPhim} />
      <h1 className="ml-3 text-left">{film.tenPhim}</h1>
    </div>
  );
}
