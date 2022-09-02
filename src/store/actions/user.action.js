import { SET_USER } from "../types/user.type";

export const setUserAction = (data) => ({
  type: SET_USER,
  payload: data,
});
