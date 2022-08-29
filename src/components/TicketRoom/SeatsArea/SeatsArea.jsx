import React from "react";
import { chunk } from "lodash";
export default function SeatsArea({ seats }) {
  const renderSeats = (seatsPerRow = 16) => {
    const chunkedSeats = chunk(seats, seatsPerRow).map((ele) => chunk(ele, 4));
    // console.log({ chunkedSeats });
    return chunkedSeats.map((ele) => {
      return (
        <div className="row">
          {ele.map((eleSub_1) => (
            <div className="col-3 row">
              {eleSub_1.map((eleSub_2) => (
                <div className="col-3">{eleSub_2.tenGhe}</div>
              ))}
            </div>
          ))}
        </div>
      );
    });
  };
  return <div>{renderSeats()}</div>;
}
