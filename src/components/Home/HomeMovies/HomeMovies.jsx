import React, { useEffect, useState } from "react";
import { getMovieList } from "../../../services/movieList";
import "./HomeMovies.scss";
import HomeMovie from "../HomeMovie/HomeMovie";
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
  const renderList = () => movieList.map((ele) => <HomeMovie movie={ele} key={ele.maPhim}/>);
  return (
    <div className="py-5 container">
      <div className="moviesWrapper">{renderList()}</div>
    </div>
  );
}
