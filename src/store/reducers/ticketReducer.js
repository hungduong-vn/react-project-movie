import { RESET_SELECTED_SEATS, SELECT_SEAT } from "../types/ticket.type";

const DEFAULT_STATE = {
  selectedSeats: [],
};

export const ticketReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_SEAT:
      let result = [...state.selectedSeats];
      result = result.includes(payload)
        ? result.filter((ele) => ele.maGhe !== payload.maGhe)
        : [...result, payload];
      state.selectedSeats = [...result];
      return { ...state };
    case RESET_SELECTED_SEATS:
      state.selectedSeats = [];
      return { ...state };
    default:
      return state;
  }
};
