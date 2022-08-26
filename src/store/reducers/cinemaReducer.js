import { DEFAULT_THEATER } from "../../constants/common";
import { GET_CINEMA, SELECT_CINEMA } from "../types/cinema.type";


const DEFAULT_STATE = {
  cinema: [],
  selectedCinema: DEFAULT_THEATER.maHeThongRap,
};

export const cinemaReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_CINEMA:
      state = { ...state, selectedCinema: payload };
      return state;
    case GET_CINEMA:
      state = { ...state, cinema: payload };
      return state;
    default:
      return state;
  }
};
export { DEFAULT_STATE as default };
