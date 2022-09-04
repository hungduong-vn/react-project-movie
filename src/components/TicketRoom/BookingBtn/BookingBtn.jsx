import { message } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookingApi } from "../../../services/ticketRoom";

export default function BookingBtn({ selectedSeats }) {
  const { showtimeId } = useParams();
  const navigate = useNavigate();
  const handleBooking = async () => {
    // console.log({ tickets });
    const danhSachVe = selectedSeats.map((ele) => ({
      maGhe: ele.maGhe,
      giaVe: ele.giaVe,
    }));
    const submitBookingData = {
      maLichChieu: showtimeId,
      danhSachVe,
    };
    // console.log({submitBookingData});
    await bookingApi(submitBookingData);
    message.success("Booking Successfully!");
    navigate("/");
  };
  return (
    <button className="btn btn-warning w-full" onClick={handleBooking}>
      BOOK
    </button>
  );
}
