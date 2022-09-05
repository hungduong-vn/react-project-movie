import React from "react";
import { useSelector } from "react-redux";
import { useAsync } from "../../../hooks/useAsync";
import { getUserInfoApi } from "../../../services/user";
import { formatDate } from "../../../utils/helper";
import "./BookingHistory.scss";
export default function BookingHistory() {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  console.log({ userInfo });
  const { state: bookingInfo } = useAsync({
    service: () => getUserInfoApi(userInfo.taiKhoan),
    deps: [userInfo.taiKhoan],
    condition: !!userInfo.taiKhoan,
  });
  console.log({ bookingInfo });
  const renderOrder = () => {
    return bookingInfo.thongTinDatVe.map((order) => {
      return (
        <div className="row order" key={order.maVe}>
          <div className="col-4 order__left">
            <img src={order.hinhAnh} alt="" className="order__poster" />
            <div className="order__left__text ml-2">
              <p>Order #{order.maVe}</p>
              <h1 className="film__name">{order.tenPhim}</h1>
              <p>Date Booked: {formatDate(order.ngayDat)}</p>
            </div>
          </div>
          <div className="col-8">
            <h1>Seats Reserved: </h1>
            <div className="">
              {order.danhSachGhe.map(
                (ele, idx) => `${idx === 0 ? "" : ", "}` + ele.tenGhe
              )}
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="bookingHistory">{bookingInfo && renderOrder()}</div>;
}
