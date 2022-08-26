import { getCinemaApi } from "../../services/cinema";
import { GET_CINEMA, SELECT_CINEMA } from "../types/cinema.type";

export const selectCinema = (cinemaItem) => ({
  type: SELECT_CINEMA,
  payload: cinemaItem,
});
export const getCinemaList = () => {
  return async (dispatch) => {
    const result = await getCinemaApi();
    dispatch({
      type: GET_CINEMA,
      payload: result.data.content,
    });
  };
};
