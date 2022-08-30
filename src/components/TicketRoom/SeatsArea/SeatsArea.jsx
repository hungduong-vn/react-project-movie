import React from "react";
import { chunk } from "lodash";
import Seat from "../Seat/Seat";
export default function SeatsArea({ seats }) {
  const renderSeats = (seatsPerRow = 16) => {
    const chunkedSeats = chunk(seats, seatsPerRow);
    // console.log({ chunkedSeats });
    return chunkedSeats.map((seatRow, idx) => {
      return (
        <div className="row" key={idx}>
          <div className="col-1 d-flex align-items-center">
            <div className="rowName">{String.fromCharCode(65 + idx)}</div>
          </div>
          <div className="col-11 d-flex justify-between">
            {seatRow.map((seat) => {
              return <Seat seat={seat} key={seat.maGhe}/>;
            })}
          </div>
        </div>
      );
    });
  };
  return <div className="pt-5">{renderSeats()}</div>;
}
