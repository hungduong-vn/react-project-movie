import { MOVIE_GROUP_ID } from "../constants/common";
import { request } from "./axios.configs";

export const getMovieList = () => {
  return request({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${MOVIE_GROUP_ID}`,
    method: "GET"
  });
};
