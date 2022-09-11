import React from "react";
import { getMovieList } from "../../../services/movieList";
import "./HomeMovies.scss";
// import HomeMovie from "../HomeMovie/HomeMovie";
import { useAsync } from "../../../hooks/useAsync";
import HomeMoviesMultiple from "./HomeMoviesMultiple";
export default function HomeMovies() {
  // const [movieList, setMovieList] = useState([]);
  // const fetchMovieList = async () => {
  //   const result = await getMovieList();
  //   // console.log("movielist", result.data.content);
  //   setMovieList(result.data.content);
  // };
  // useEffect(() => {
  //   fetchMovieList();
  // }, []);
  const { state: movieList } = useAsync({
    service: getMovieList,
  });
  // const renderList = () =>
  //   movieList.map((ele) => <HomeMovie movie={ele} key={ele.maPhim} />);
  return (
    <div className="py-5 container">
      {/* <div className="moviesWrapper">{movieList && renderList()}</div> */}
      {movieList && <HomeMoviesMultiple movieList={movieList} />}
    </div>
  );
}
