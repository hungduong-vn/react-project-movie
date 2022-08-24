import React, { useEffect, useState } from "react";
import { getMovieList } from "../../services/movieList";
import { truncate } from "lodash";
import "./HomeMovies.scss";
export default function HomeMovies() {
  const [movieList, setMovieList] = useState([]);
  const fetchMovieList = async () => {
    const result = await getMovieList();
    // console.log({ result });
    setMovieList(result.data.content);
  };
  useEffect(() => {
    fetchMovieList();
  }, []);
  const renderList = () =>
    movieList.map((ele) => (
      <div
        className="rounded-md shadow-md bg-gray-50 text-gray-800 my-3 "
        key={ele.maPhim}
      >
        <img
          src={ele.hinhAnh}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8 movieCard">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">
              {ele.tenPhim}
            </h2>
            <p className="text-gray-800">
              {truncate(ele.moTa, { length: 90 })}
            </p>
          </div>
          <button type="button" className="btn btn-outline-dark w-1/3 bookBtn">
            Book
          </button>
        </div>
      </div>
    ));
  return (
    <div className="py-5 container">
      <div className="moviesWrapper">{renderList()}</div>
    </div>
  );
}
