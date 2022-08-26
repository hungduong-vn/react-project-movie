import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT_THEATER } from "../../../constants/common";
import { getTheaters } from "../../../services/theater";
import "./HomeTheater.scss"

const { TabPane } = Tabs;

const HomeTheater = () => {
  const state = useSelector((store) => store.cinemaReducer);
  const [theaters, setTheaters] = useState();
  const fetchTheaters = async () => {
    // console.log("selectedCinema", state.selectedCinema);
    const result = await getTheaters(state.selectedCinema);
    setTheaters(result.data.content);
  };
  useEffect(() => {
    console.log('fetchTheaters');
    fetchTheaters();
  }, [state.selectedCinema]);
  const renderTheaters = () => {
    console.log('theaters',theaters[0]);
    const { lstCumRap, logo } = theaters[0];
    return lstCumRap.map((ele) => {
      return (
        <TabPane
          tab={
            <div className="row theaterInfo">
              <div className="col-3">
                <img
                  className="theaterThumb img-fluid"
                  width={60}
                  src={logo}
                  alt={ele.tenCumRap}
                />
              </div>
              <div className="col-9 text-left theaterText">
                <h1>{ele.tenCumRap}</h1>
                <p className="theaterAddress">{ele.diaChi}</p>
              </div>
            </div>
          }
          key={ele.maCumRap}
        ></TabPane>
      );
    });
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{
          height: "600px",
        }}
      >
        {theaters && renderTheaters()}
      </Tabs>
    </div>
  );
};

export default HomeTheater;
