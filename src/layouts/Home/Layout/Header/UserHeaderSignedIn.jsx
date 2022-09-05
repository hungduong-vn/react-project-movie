import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { USER_INFO_KEY } from "../../../../constants/common";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { setUserAction } from "../../../../store/actions/user.action";
import "./UserHeaderSignedIn.scss";
import { message } from "antd";

export default function UserHeaderSignedIn({ userState }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    console.log("LOGGING OUT...");
    localStorage.removeItem(USER_INFO_KEY);
    dispatch(setUserAction(null));
    message.success("Logged Out Successfully!");
    navigate("/");
  };
  return (
    <div className="d-flex align-items-center justify-end">
      <h1 className="text-gray-50 font-semibold text-xl leading-10 d-flex align-items-center m-0">
        <span className="headerSignedIn__text">
          <span className="headerSignedIn__hello">Hello</span>{" "}
          {userState.userInfo.taiKhoan}
        </span>
        <div className="dropdown ml-3">
          <UserOutlined className="userIcon dropbtn" />
          <div className="dropdown-content">
            <div className="userIcon__text">
              <Link to="/user-account">
                <SettingOutlined className="mr-2 logOutIcon" />
                Account
              </Link>
            </div>
            <div className="userIcon__text" onClick={handleLogOut}>
              <LogoutOutlined className="mr-2 logOutIcon" />
              Log Out
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}
