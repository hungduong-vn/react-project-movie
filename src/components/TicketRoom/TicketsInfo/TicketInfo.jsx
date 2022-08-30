import React from "react";
import TicketBill from "../TicketBill/TicketBill";

export default function TicketInfo({ info }) {
  console.log({ info });
  return (
    <div className="py-5">
      <div className="card p-3">
        <div className="d-flex">
          <img className="w-1/3" src={info.hinhAnh} alt={info.tenPhim} />
          <div className="col-8 d-flex align-items-center">
            <h1 className="ticketInfo__movieName">{info.tenPhim}</h1>
          </div>
        </div>
        <div className="my-4 ticketInfo__body">
          <ul className="my-3">
            <li className="ticketInfo__item">
              <span className="ticketInfo__itemHead">Location:</span>{" "}
              {info.diaChi}
            </li>
            <li className="ticketInfo__item">
              <span className="ticketInfo__itemHead">Theater:</span>{" "}
              {info.tenCumRap}
            </li>
            <li className="ticketInfo__item">
              <span className="ticketInfo__itemHead">Screen:</span>{" "}
              {info.tenRap}
            </li>
            <li className="ticketInfo__item">
              <span className="ticketInfo__itemHead">Date:</span>{" "}
              {info.ngayChieu}
            </li>
            <li className="ticketInfo__item">
              <span className="ticketInfo__itemHead">Time:</span>{" "}
              {info.gioChieu}
            </li>
          </ul>
        </div>
        <div className="ticketInfo__ticketList">
          <div className="ticketInfo__item d-flex justify-between">
            <span className="ticketInfo__itemHead">Selected Seats</span>
            <span className="ticketInfo__itemHead">Price</span>
          </div>
            <TicketBill/>
        </div>
      </div>
    </div>
  );
}
