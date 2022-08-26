import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { getBanners } from "../../../services/banners";
import "./HomeCarousel.scss";
const HomeCarousel = () => {
  const [banners, setBanners] = useState([]);
  const fetchBanners = async () => {
    const result = await getBanners();
    setBanners(result.data.content);
  };
  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <Carousel effect="fade">
      {banners.map((ele) => (
        <div key={ele.maBanner} className="banner">
          <img
            className="img-fluid"
            src={ele.hinhAnh}
            alt={`banner_${ele.maPhim}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
