import { request } from "./axios.configs";

export const signInApi = (data) => {
  return request({
    url: "QuanLyNguoiDung/DangNhap",
    method: "POST",
    data,
  });
};
export const signUpApi = (data) => {
  return request({
    url: "QuanLyNguoiDung/DangKy",
    method: "POST",
    data,
  });
};
