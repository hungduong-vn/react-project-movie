import { GET_USER, SET_USER } from "../types/user.type";

const DEFAULT_STATE = {};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state };
    case SET_USER:
      state.userInfo = { ...payload };
      console.log("Set User to:", state.userInfo);
      return { ...state };
    default:
      return state;
  }
};
