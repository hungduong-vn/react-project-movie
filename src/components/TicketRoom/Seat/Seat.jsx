import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../../../store/actions/ticket.action";
import "./Seat.scss";
export default function Seat({ seat }) {
  // console.log(seat);
  const seatRef = useRef();
  const styleSelectedSeat = () => {
    if (seatRef.current.classList.contains("seat__selecting")) {
      seatRef.current.classList.remove("seat__selecting");
    } else {
      seatRef.current.classList.add("seat__selecting");
    }
  }
  const dispatch = useDispatch();
  const handleClick = () => {
    styleSelectedSeat();
    // console.log(seat.tenGhe);
    dispatch(selectSeat(seat));
  };
  return (
    <div>
      <div
        className={`seat seatHoverable my-2${
          seat.loaiGhe === "Vip" ? " seat__vip" : ""
        }`}
        ref={seatRef}
        onClick={handleClick}
      ></div>
    </div>
  );
}
