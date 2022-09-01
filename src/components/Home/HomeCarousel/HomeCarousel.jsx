import { Carousel } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../contexts/loading.context";
import { useAsync } from "../../../hooks/useAsync";
import { getBanners } from "../../../services/banners";
import "./HomeCarousel.scss";
const HomeCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [,setLoadingState] = useContext(LoadingContext);
  const fetchBanners = async () => {
    setLoadingState({isLoading: true});
    const result = await getBanners();
    setBanners(result.data.content);
    setLoadingState({isLoading: false});
  };
  useEffect(() => {
    fetchBanners();
  }, []);
  // const { state: banners = [] } = useAsync({ service: getBanners });
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
