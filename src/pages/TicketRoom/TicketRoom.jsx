import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomLayout from "../../components/TicketRoom/RoomLayout/RoomLayout";
import TicketInfo from "../../components/TicketRoom/TicketsInfo/TicketInfo";
import { useAsync } from "../../hooks/useAsync";
import { getTicketRoomApi } from "../../services/ticketRoom";
import "./TicketRoom.scss";
export default function TicketRoom() {
  const { showtimeId } = useParams();
  // const [ticketRoom, setTicketRoom] = useState();
  // const fetchTicketRoom = async () => {
  //   const result = await getTicketRoomApi(showtimeId);
  //   setTicketRoom(result.data.content);
  //   // console.log(result.data.content);
  // };
  // useEffect(() => {
  //   fetchTicketRoom();
  // }, []);
  const { state: ticketRoom } = useAsync({
    service: () => getTicketRoomApi(showtimeId),
    deps: [showtimeId],
    condition: !!showtimeId,
  });
  console.log({ ticketRoom });
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {ticketRoom && <RoomLayout seats={ticketRoom.danhSachGhe} />}
        </div>
        <div className="col-4">
          {ticketRoom && <TicketInfo info={ticketRoom.thongTinPhim} />}
        </div>
      </div>
    </div>
  );
}
