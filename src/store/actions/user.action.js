import { SET_USER, UPDATE_USER } from "../types/user.type";
import { USER_SELECTED } from "../types/user.type";

export const setUserAction = (data) => ({
  type: SET_USER,
  payload: data,
});

export const setUserInfoAction = (data) => {
  return {
    type: USER_SELECTED,
    paload: data,
  };
};
export const updateUserInfoAction = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};
