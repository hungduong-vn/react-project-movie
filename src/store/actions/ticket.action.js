import { RESET_SELECTED_SEATS, SELECT_SEAT } from "../types/ticket.type";

export const selectSeat = (seat) => ({
  type: SELECT_SEAT,
  payload: seat,
});

export const resetSelectedSeats = () => ({
  type: RESET_SELECTED_SEATS,
  payload: {}
})