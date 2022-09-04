import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_INFO_KEY } from "../../../../constants/common";
import { UserOutlined } from "@ant-design/icons";
import { setUserAction } from "../../../../store/actions/user.action";

export default function UserHeaderSignedIn({ userState }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    console.log("LOGGING OUT...");
    localStorage.removeItem(USER_INFO_KEY);
    dispatch(setUserAction(null));
    navigate("/");
  };
  return (
    <div className="d-flex align-items-center justify-end">
      <h1 className="text-gray-50 font-semibold text-xl leading-10 d-flex align-items-center m-0">
        <button
          className="self-center font-semibold rounded homeSignUp mr-2"
          onClick={handleLogOut}
        >
          Log Out
        </button>
        {"Hello " + userState.userInfo.taiKhoan}
        <UserOutlined className="userIcon" />
      </h1>
    </div>
  );
}
