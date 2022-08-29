import React from "react";
import { useNavigate } from "react-router-dom";
export default function HomeMovie({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie-detail/${movie.maPhim}`);
  };
  return (
    <div className="home__posterContainer">
      <img src={movie.hinhAnh} alt="" className="w-full h-full" />
      <div className="overlay_homePoster">
        <div className="poster__content">
          <div className="poster__name h-5/6 p-3">
            <h1>{movie.tenPhim}</h1>
          </div>
          <div className="poster__btn h-1/6 d-flex justify-between align-items-center px-3">
            <button
              type="button"
              className="btn btn-outline-light bookBtn"
              onClick={() => handleClick()}
            >
              More Info
            </button>
            <button
              type="button"
              className="btn btn-light bookBtn"
              onClick={() => handleClick()}
            >
              Book
              <div className="ticketIcon d-inline-block">
                <span class="material-symbols-outlined">local_activity</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
