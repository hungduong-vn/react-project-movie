import { Tabs } from "antd";
import React from "react";
import CinemaTabPane from "../CinemaTabPane/CinemaTabPane";
import MovieTabs from "../MovieTabs/MovieTabs";
const { TabPane } = Tabs;
export default function CinemaTabs({ cinemaList, logo }) {
  return (
    <Tabs tabPosition="left" style={{ height: 600 }}>
      {cinemaList.map((cinema) => {
        return (
          <TabPane
            tab={<CinemaTabPane cinema={cinema} logo={logo} />}
            key={cinema.maCumRap}
          >
            <MovieTabs movieList={cinema.danhSachPhim}/>
          </TabPane>
        );
      })}
    </Tabs>
  );
}
