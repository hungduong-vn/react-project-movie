import { DEFAULT_THEATER, MOVIE_GROUP_ID } from "../constants/common";
import { request } from "./axios.configs";

export const getTheaters = (theaterId = "") => {
  // if (!theaterId) {
  //   theaterId = DEFAULT_THEATER.maHeThongRap;
  // }
  const URL = `QuanLyRap/LayThongTinLichChieuHeThongRap?${
    theaterId ? `maHeThongRap=${theaterId}&` : ""
  }maNhom=${MOVIE_GROUP_ID}`;
  console.log({ URL });
  return request({
    url: URL,
    method: "GET",
  });
};
