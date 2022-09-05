import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaList } from "../../../store/actions/cinema.action";
// import { filterShowtimesByDay } from "../../../utils/helper";
import BrandTabPane from "./BrandTabPane/BrandTabPane";
// import BrandTab from "./BrandTabPane/BrandTabPane";
// import CinemaTab from "./CinemaTabPane/CinemaTabPane";
import CinemaTabs from "./CinemaTabs/CinemaTabs";
import "./HomeMenu.scss";
const { TabPane } = Tabs;

const HomeMenu = () => {
  const state = useSelector((store) => store.cinemaReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  const renderCinema = () => {
    // console.log(state.cinema);
    return state.cinema?.map((ele) => {
      // console.log({ ele });
      return (
        <TabPane tab={<BrandTabPane brands={ele} />} key={ele.maHeThongRap}>
          <CinemaTabs cinemaList={ele.lstCumRap} logo={ele.logo} />
        </TabPane>
      );
    });
  };
  return (
    <div className="container py-5">
      <>
        <Tabs tabPosition="left" style={{ height: 600 }}>
          {renderCinema()}
        </Tabs>
      </>
    </div>
  );
};

export default HomeMenu;
