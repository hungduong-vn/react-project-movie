import React from "react";
import Screen from "../Screen/Screen";
import SeatsArea from "../SeatsArea/SeatsArea";

export default function RoomLayout({ seats }) {
  return (
    <>
      <Screen />
      <SeatsArea seats={seats} />
    </>
  );
}
