import React from "react";
import { truncate } from "lodash";
export default function HomeMovie({ movie }) {
  return (
    // <div
    //   className="rounded-md shadow-md bg-gray-50 text-gray-800 my-3 "
    // >
    //   <img
    //     src={movie.hinhAnh}
    //     alt=""
    //     className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
    //   />
    //   <div className="flex flex-col justify-between p-6 space-y-8 movieCard">
    //     <div className="space-y-2">
    //       <h2 className="h-48 text-2xl font-semibold tracking-wide">
    //         {movie.tenPhim}
    //       </h2>
    //       <p className="text-gray-800">
    //         {truncate(movie.moTa, { length: 90 })}
    //       </p>
    //     </div>
    //     <button type="button" className="btn btn-outline-dark bookBtn">
    //       More Info
    //     </button>
    //   </div>
    // </div>
    <div className="home__posterContainer">
      <img src={movie.hinhAnh} alt="" className="w-full h-full" />
      <div className="overlay_homePoster">
        <div className="poster__content">
          <div className="poster__name h-5/6 p-3">
            <h1>{movie.tenPhim}</h1>
          </div>
          <div className="poster__btn h-1/6 d-flex justify-between align-items-center px-3">
            <button type="button" className="btn btn-outline-light bookBtn">
              More Info
            </button>
            <button type="button" className="btn btn-light bookBtn">
              Book{" "}
              <div className="ticketIcon d-inline-block">
                <i class="icofont-ticket"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
