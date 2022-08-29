import { Tabs } from "antd";
import React from "react";
import BrandTabPane from "../../Home/HomeMenu/BrandTabPane/BrandTabPane";
import CinemaTabPane from "../../Home/HomeMenu/CinemaTabPane/CinemaTabPane";
import CinemaTabs from "../../Home/HomeMenu/CinemaTabs/CinemaTabs";
import { renderShowtimes } from "../../Home/HomeMenu/MovieTabs/MovieTabs";

const { TabPane } = Tabs;
export default function MovieShowtimes({ showtimes }) {
  console.log(showtimes);
  return (
    <div className="container">
      <Tabs tabPosition="left" style={{ height: "600px" }}>
        {showtimes.map((ele) => {
          return (
            <TabPane
              tab={
                <BrandTabPane
                  brands={{ logo: ele.logo, tenCumRap: ele.tenHeThongRap }}
                />
              }
              key={ele.maHeThongRap}
            >
              <Tabs tabPosition="left" style={{ height: "600px" }}>
                {ele.cumRapChieu.map((cinema) => {
                  return (
                    <TabPane
                      tab={<CinemaTabPane cinema={cinema} logo={ele.logo} />}
                      key={cinema.maCumRap}
                    >
                      {renderShowtimes(cinema.lichChieuPhim)}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}
