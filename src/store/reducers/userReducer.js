import { USER_INFO_KEY } from "../../constants/common";
import {
  GET_USER,
  SET_USER,
  UPDATE_USER,
  USER_SELECTED,
  USER_UPLOAD,
} from "../types/user.type";

let userInfo = localStorage.getItem(USER_INFO_KEY);
if (userInfo) {
  userInfo = JSON.parse(userInfo);
  console.log({ userInfo });
}
const DEFAULT_STATE = { userInfo };

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state };
    case SET_USER:
      state.userInfo = payload;
      console.log("Set User to:", state.userInfo);
      return { ...state };
    case UPDATE_USER:
      state.userInfo = payload;
      console.log("Update User to: ", state.userInfo);
      return { ...state };
    case USER_UPLOAD: {
      state.userInfo = payload;

      return { ...state };
    }
    case USER_SELECTED: {
      state.userSelected = payload;

      return { ...state };
    }
    default:
      return state;
  }
};
