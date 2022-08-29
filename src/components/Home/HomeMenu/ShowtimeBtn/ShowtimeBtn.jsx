import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShowtimeBtn({ time, showtimeId }) {
  const navigate = useNavigate();
  const handleBooking = () => {
    // console.log(showtimeId);
    navigate(`/ticket-room/${showtimeId}`);
  };
  return (
    <button onClick={handleBooking} className="m-1 btn btn-outline-dark">
      {time}
    </button>
  );
}
