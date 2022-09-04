import { notification } from "antd";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function ManagerGuard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userState.userInfo) {
      notification.success({
        message: "Không đủ quyền truy cập",
      });
      return navigate("/sign-in");
    }

    if (
      userState.userInfo &&
      userState.userInfo.maLoaiNguoiDung !== "QuanTri"
    ) {
      notification.success({
        message: "Không đủ quyền truy cập",
      });
      return navigate("/");
    }
  }, []);
  return <Outlet/>;
}
