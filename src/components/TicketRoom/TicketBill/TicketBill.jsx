import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SeatType } from "../../../enums/common";
import { resetSelectedSeats } from "../../../store/actions/ticket.action";
import { formatter } from "../../../utils/helper";
import BookingBtn from "../BookingBtn/BookingBtn";

export default function TicketBill() {
  const seats = useSelector((state) => state.ticketReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetSelectedSeats());
  }, []);
  // console.log({ seats });
  const filterBySeatType = (seats) => {
    let result = { Vip: [], Standard: [] };
    seats.forEach((ele) => {
      ele.loaiGhe === SeatType.Vip
        ? result.Vip.push(ele)
        : result.Standard.push(ele);
    });
    return result;
  };
  const calcSubTotalPrice = (seats) => {
    if (!seats[0]) {
      return 0;
    }
    const pricePerSeat = seats[0]?.giaVe;
    // console.log({pricePerSeat});
    return pricePerSeat * seats.length;
  };
  const calcTotalPrice = (Vip, Standard) => {
    return calcSubTotalPrice(Vip) + calcSubTotalPrice(Standard);
  };
  const renderSeatPrice = (seats, type) => {
    // console.log("render", seats);
    return (
      <div className="ticketBill__subTotal py-3" key={type}>
        <h1 className="ticketBill__seatType">
          {type} ({`${seats.length} Seat${seats.length > 1 ? "s" : ""}`})
        </h1>
        <div className="d-flex justify-between">
          <div className="w-1/2">
            {seats.map((ele, idx) => (
              <span key={idx}>{`${idx !== 0 ? ", " : ""}${ele.tenGhe}`}</span>
            ))}
          </div>
          <div className="">{formatter.format(calcSubTotalPrice(seats))}</div>
        </div>
      </div>
    );
  };
  const renderBill = () => {
    const { Vip, Standard } = filterBySeatType(seats.selectedSeats);
    console.log({ Vip });
    return (
      <>
        <div className="ticketBill__upper">
          {Vip.length > 0 && renderSeatPrice(Vip, "Vip")}
          {Standard.length > 0 && renderSeatPrice(Standard, "Standard")}
        </div>
        <div className="mt-4 ticketBill__total d-flex justify-between py-4">
          <div className="ticketInfo__itemHead">Total</div>
          <div className="ticketBill__totalPrice">
            {formatter.format(calcTotalPrice(Vip, Standard))}
          </div>
        </div>
        {seats.selectedSeats.length > 0 && <BookingBtn selectedSeats={seats.selectedSeats}/>}
      </>
    );
  };
  return <div>{renderBill()}</div>;
}
