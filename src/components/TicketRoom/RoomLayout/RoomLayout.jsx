import React from "react";
import Screen from "../Screen/Screen";
import SeatsArea from "../SeatsArea/SeatsArea";

export default function RoomLayout({ seats }) {
  return (
    <div className="py-5 row">
      <div className="col-12 d-flex mb-3">
        <div className="col-4">
          <h1 className="roomLayout__head">PLEASE CHOOSE YOUR SEATS:</h1>
        </div>
        <div className="col-2 d-flex">
          <div className="seat"></div>
          <p className="pl-2 seat__type">Standard</p>
        </div>
        <div className="col-2 d-flex">
          <div className="seat seat__vip"></div>
          <p className="pl-2 seat__type">VIP</p>
        </div>
        <div className="col-2 d-flex">
          <div className="seat seat__selecting"></div>
          <p className="pl-2 seat__type">Selecting</p>
        </div>
        <div className="col-2 d-flex">
          <div className="seat seat__taken"></div>
          <p className="pl-2 seat__type">Taken</p>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="col-11">
        <Screen />
      </div>
      <div className="col-12">
        <SeatsArea seats={seats} />
      </div>
    </div>
  );
}
