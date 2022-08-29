import React from "react";
import { useParams } from "react-router-dom";

export default function TicketRoom() {
  const params = useParams();
  return <div>
    <h1>Welcome: {params.showtimeId}</h1>
  </div>;
}
