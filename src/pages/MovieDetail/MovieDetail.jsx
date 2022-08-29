import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../../components/MovieDetail/MovieInfo/MovieInfo";
import MovieShowtimes from "../../components/MovieDetail/MovieShowtimes/MovieShowtimes";
import { getMovieShowtimesApi } from "../../services/movieShowtimes";

export default function MovieDetail() {
  const params = useParams();
  const [movieShowtimes, setMovieShowtimes] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const fetchMovieShowtimes = async () => {
    const result = await getMovieShowtimesApi(params.movieId);
    // console.log("movieShowtimes", result.data.content);
    const { heThongRapChieu, ...info } = result.data.content;
    setMovieShowtimes(heThongRapChieu);
    setMovieInfo(info);
  };
  useEffect(() => {
    fetchMovieShowtimes();
  }, []);
  return (
    <>
      {movieInfo && <MovieInfo info={movieInfo} />}
      {movieShowtimes && <MovieShowtimes showtimes={movieShowtimes} />}
    </>
  );
}
