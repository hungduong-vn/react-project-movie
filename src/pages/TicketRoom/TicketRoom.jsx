import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomLayout from "../../components/TicketRoom/RoomLayout/RoomLayout";
import TicketInfo from "../../components/TicketRoom/TicketsInfo/TicketInfo";
import { getTicketRoomApi } from "../../services/ticketRoom";
import "./TicketRoom.scss";
export default function TicketRoom() {
  const { showtimeId } = useParams();
  const [ticketRoom, setTicketRoom] = useState();
  const fetchTicketRoom = async () => {
    const result = await getTicketRoomApi(showtimeId);
    setTicketRoom(result.data.content);
  };
  useEffect(() => {
    fetchTicketRoom();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          {ticketRoom&&<RoomLayout seats={ticketRoom.danhSachGhe} />}
        </div>
        <div className="col-3">
          <TicketInfo />
        </div>
      </div>
    </div>
  );
}
