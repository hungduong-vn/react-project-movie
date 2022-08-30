import React from "react";
import Screen from "../Screen/Screen";
import SeatsArea from "../SeatsArea/SeatsArea";

export default function RoomLayout({ seats }) {
  const renderRowName = (numRow = 10) => {
    const result = [];
    for (let i = 0; i < numRow; i++) {
      result.push(<div className="row">{String.fromCharCode(65 + i)}</div>);
    }
    console.log({ result });
    return result;
  };
  return (
    <div className="py-5 row">
      <div className="col-1"></div>
      <div className="col-11">
        <Screen />
      </div>
      {/* <div className="col-1 py-5">{renderRowName()}</div> */}
      <div className="col-12">
        <SeatsArea seats={seats} />
      </div>
    </div>
  );
}
