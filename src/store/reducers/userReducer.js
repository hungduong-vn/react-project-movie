import { USER_INFO_KEY } from "../../constants/common";
import { GET_USER, SET_USER } from "../types/user.type";

let userInfo = localStorage.getItem(USER_INFO_KEY);
if(userInfo) {
  userInfo = JSON.parse(userInfo);
  console.log({userInfo});
}
const DEFAULT_STATE = {userInfo,};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state };
    case SET_USER:
      
      state.userInfo = payload;
      console.log("Set User to:", state.userInfo);
      return { ...state };
    default:
      return state;
  }
};
