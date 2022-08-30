import React, { useRef, useState } from "react";
import "./Seat.scss";
export default function Seat({ seat }) {
  // console.log(seat);
  const seatRef = useRef();
  // const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (seatRef.current.classList.contains("selected")) {
      seatRef.current.classList.remove("selected");
    } else {
      seatRef.current.classList.add("selected");
    }
    console.log(seat.tenGhe);
    // setSelected(!selected);
  };
  return (
    <div>
      <div className="seat my-2" ref={seatRef} onClick={handleClick}></div>
    </div>
  );
}
