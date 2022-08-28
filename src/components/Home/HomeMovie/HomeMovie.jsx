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
      <img
        src={movie.hinhAnh}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
}
