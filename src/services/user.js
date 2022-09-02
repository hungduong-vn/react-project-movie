import { request } from "./axios.configs";

export const signInApi = (data) => {
  return request({
    url: "QuanLyNguoiDung/DangNhap",
    method: "POST",
    data,
  });
};
