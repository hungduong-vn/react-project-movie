import { Tabs } from "antd";
import React from "react";
import { filterShowtimesByDay } from "../../../../utils/helper";
import MovieTabPane from "../MovieTabPane/MovieTabPane";
import ShowtimeBtn from "../ShowtimeBtn/ShowtimeBtn";

const { TabPane } = Tabs;
export const renderShowtimes = (showtimeList) => {
  // console.log({ showtimeList });
  const showtimes = filterShowtimesByDay(showtimeList);
  return showtimes.map((ele, idx) => (
    <div
      className={`showtime py-3${idx === 0 ? " firstShow" : ""}`}
      key={ele.date}
    >
      <h1 className="pl-1">{ele.date}</h1>
      {ele.timeList.map((time, idxTime) => (
        <ShowtimeBtn
          time={time}
          key={idxTime}
          showtimeId={showtimeList[idxTime].maLichChieu}
        />
      ))}
    </div>
  ));
};
export default function MovieTabs({ movieList }) {
  return (
    <Tabs tabPosition="left" style={{ height: 600 }}>
      {movieList.map((film) => {
        return (
          <TabPane tab={<MovieTabPane film={film} />} key={film.maPhim}>
            <div className="showtimes">
              {renderShowtimes(film.lstLichChieuTheoPhim)}
            </div>
          </TabPane>
        );
      })}
    </Tabs>
  );
}
